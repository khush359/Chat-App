const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const protect = asyncHandler(async (req,res,next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token = req.headers.authorization.split(" ")[1];

            // decode token id 
            const decoded = jwt.verify(token, process.env.jwt_secret);

            req.user = await User.findById(decoded.id).select("-password");

            next();
        }
        catch(error){
            res.status(401);
            throw new Error("Not authorized user, token failed");
        }        
    }

    if(!token){
        res.status(401);
        throw new Error("Not authorized user, no token ");
    }    
});

module.exports = {protect};
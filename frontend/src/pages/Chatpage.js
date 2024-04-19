import { Box } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/miscllaneous/SideDrawer";
import MyChats from "../components/MyChats";
import { useState } from "react";
import ChatBox from "../components/ChatBox";
import "../components/styles.css";

const Chatpage = () => {
  const { user } = ChatState();
  // Correctly use array destructuring to get fetchAgain and setFetchAgain
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
       className="box"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;

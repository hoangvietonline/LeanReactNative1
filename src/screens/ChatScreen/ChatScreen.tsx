import { SafeAreaView, StyleSheet } from "react-native";
import HeadChatComponent from "./HeadChatComponent/HeadChatComponent";
import ChatContentComponent from "./ChatContentComponent/ChatContentComponent";
import BottomToolChatComponent from "./BottomToolChatComponent/BottomToolChatComponent";
import { ChatModel } from "../../model/chat-model";
import { useState } from "react";
import moment from "moment";

const ChatScreen = () => {
  const lsChat = [
    new ChatModel(1, "tao la viet ne", true,moment().subtract(30,"minutes") ),
    new ChatModel(2, "Viet hã, lâu ngày không gặp", false, moment().subtract(20,"minutes") ),
    new ChatModel(3, "Dạo này khoẻ không mi?", false,  moment().subtract(19,"minutes") ),
    new ChatModel(4, "Tao khoẻ lắm, còn m vẫn khoẻ chớ, alo alo nghe gọi trả lời nghe hú hé alo lao", true,  moment().subtract(10,"minutes") )
  ];

  const [conversation, addChat] = useState(lsChat);

  const handleCallback = (mess: string) => {
    conversation.push(
      new ChatModel(6, mess, true, moment())
    );
    addChat(conversation);

    const reply = async () => {
      await delay(3000);
      conversation.push(
        new ChatModel(6, "kakak hu he kakoaoaoa", false, moment())
      );
      addChat(conversation);
    };
    reply();
  };

  return <SafeAreaView style={styles.container}>
    <HeadChatComponent />
    <ChatContentComponent lsChat={conversation} />
    <BottomToolChatComponent callback={handleCallback} />
  </SafeAreaView>;
};

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#FFCACD4D"
  }
});

export default ChatScreen;

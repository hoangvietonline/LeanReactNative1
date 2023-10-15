import { SafeAreaView, StyleSheet } from "react-native";
import HeadChatComponent from "./HeadChatComponent/HeadChatComponent";
import ChatContentComponent from "./ChatContentComponent/ChatContentComponent";
import BottomToolChatComponent from "./BottomToolChatComponent/BottomToolChatComponent";

const ChatScreen = () => {
  return <SafeAreaView style={styles.container}>
    <HeadChatComponent />
    <ChatContentComponent />
    <BottomToolChatComponent/>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#FFCACD4D"
  }
});

export default ChatScreen;

import { Animated, StyleSheet, View } from "react-native";
import React from "react";
import ChatItem from "./ChatItem/ChatItem";
import { ChatModel } from "../../../model/chat-model";
import FlatList = Animated.FlatList;


const renderChatItem = ({ item }: {
  item: ChatModel
}) => {
  return <ChatItem chatModel={item} />;
};

const lsChat = [
  new ChatModel(1, "tao la viet ne", true, "18 minutes ago"),
  new ChatModel(2, "Viet hã, lâu ngày không gặp", false, "12 minutes ago"),
  new ChatModel(3, "Dạo này khoẻ không mi?", false, "11 minutes ago"),
  new ChatModel(4, "Tao khoẻ lắm, còn m vẫn khoẻ chớ, alo alo nghe gọi trả lời nghe hú hé alo lao", true, "9 minutes ago")

];

const ChatContentComponent = () => {
  return <View style={styles.root}>
    <FlatList
      style={styles.listStyle}
      data={lsChat}
      renderItem={renderChatItem}
      horizontal={false}
      automaticallyAdjustContentInsets={false}
      keyExtractor={(item, index) => `${"item"}-${index}`}
    />
  </View>;
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#FFF"
  },
  listStyle: {
    paddingHorizontal: 24,
    marginTop: 32
  }
});

export default ChatContentComponent;

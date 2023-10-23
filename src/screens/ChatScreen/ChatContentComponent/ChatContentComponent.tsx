import { FlatList, StyleSheet, View } from "react-native";
import React, { useRef } from "react";
import ChatItem from "./ChatItem/ChatItem";
import { ChatModel } from "../../../model/chat-model";


const renderChatItem = ({ item }: {
  item: ChatModel
}) => {
  return <ChatItem chatModel={item} />;
};

export interface IChatContentComponent {
  lsChat: ChatModel[];
}

const ChatContentComponent = ({ lsChat }: IChatContentComponent) => {
  let flatList = useRef<FlatList>(null);

  function handleScrollToEnd() {
    flatList.current?.scrollToEnd();
  }

  return <View style={styles.root}>
    <FlatList
      ref={flatList}
      onContentSizeChange={() => handleScrollToEnd()}
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
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 32
  }
});

export default ChatContentComponent;

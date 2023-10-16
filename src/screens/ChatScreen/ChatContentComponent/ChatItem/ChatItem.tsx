import { StyleSheet, Text, View } from "react-native";
import { ChatModel } from "../../../../model/chat-model";

export interface IChatItem {
  chatModel: ChatModel,
}

const ChatItem = ({ chatModel }: IChatItem) => {
  return <View style={chatModel.isMe ? styles.rootIsMe : styles.rootNotMe}>
    <View style={[styles.containerCommon, chatModel.isMe ? styles.containerIsMe : styles.containerNotMe]}>
      <Text
        style={[styles.contentCommon, chatModel.isMe ? styles.contentIsMe : styles.contentNotMe]}>{chatModel.content}</Text>
      <Text style={[styles.timeCommon, chatModel.isMe ? styles.timeIsMe : styles.timeNotMe]}>{chatModel.time}</Text>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  rootIsMe: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 12,
    marginStart: 26
  },
  rootNotMe: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 12,
    marginEnd: 26
  },
  containerCommon: {
    flexDirection: "column",
    borderRadius: 16,
    padding: 16
  },
  containerNotMe: {
    backgroundColor: "#E6FDFD"
  },
  containerIsMe: {
    backgroundColor: "#FF828B"
  },
  contentCommon: {
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: -0.14

  },
  contentIsMe: {
    color: "#FFF"
  },
  contentNotMe: {
    color: "#2C4364"
  },
  timeCommon: {
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 16,
    letterSpacing: -0.1
  },
  timeIsMe: {
    color: "#D6D9DF"
  },
  timeNotMe: {
    color: "#ADB4C0"
  }

});

export default ChatItem;

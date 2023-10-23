import { StyleSheet, Text, View } from "react-native";
import { ChatModel, MessageStatus } from "../../../../model/chat-model";
import moment from "moment";
import FastImage from "react-native-fast-image";
import { images } from "../../../../assets/images";

export interface IChatItem {
  chatModel: ChatModel,
}

const ChatItem = ({ chatModel }: IChatItem) => {
  const isFail = chatModel.status == MessageStatus.FAILED;

  return <View style={chatModel.isMe ? styles.rootIsMe : styles.rootNotMe}>
    <View
      style={[styles.containerCommon, chatModel.isMe ? (isFail
        ? styles.containerIsMeFail : styles.containerIsMe) : styles.containerNotMe]}>
      <Text
        style={[styles.contentCommon, chatModel.isMe ?
          (isFail ? styles.contentIsMeFail : styles.contentIsMe)
          : styles.contentNotMe]}>{chatModel.content}</Text>
      <Text
        style={[styles.timeCommon, chatModel.isMe ? (isFail
          ? styles.timeIsMeFail : styles.timeIsMe) : styles.timeNotMe]}>{calculateTimeAgo(chatModel.time)}</Text>

      <FastImage source={images.icSendFail} style={isFail
        ? styles.imageSendFail : styles.hideSendFail} />
    </View>
  </View>;
};

const calculateTimeAgo = (timestampInMillis: number) => {
  const duration = moment.duration(moment().diff(timestampInMillis));

  if (duration.asSeconds() < 60) {
    const seconds = Math.floor(duration.asSeconds());
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  } else if (duration.asMinutes() < 60) {
    const minutes = Math.floor(duration.asMinutes());
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (duration.asHours() < 24) {
    const hours = Math.floor(duration.asHours());
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (duration.asDays() < 30) {
    const days = Math.floor(duration.asDays());
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (duration.asMonths() < 12) {
    const months = Math.floor(duration.asMonths());
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else {
    const years = Math.floor(duration.asYears());
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  }
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
  containerIsMeFail: {
    backgroundColor: "#D9D9D9"
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
  contentIsMeFail: {
    color: "#CD2D2D"
  },
  contentNotMe: {
    color: "#2C4364"
  },
  timeCommon: {
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 16,
    letterSpacing: -0.1,
    marginTop: 2,
    marginEnd: 26
  },
  timeIsMe: {
    color: "#D6D9DF"
  },
  timeIsMeFail: {
    color: "#FFFFFF"
  },
  timeNotMe: {
    color: "#ADB4C0"
  },
  imageSendFail: {
    width: 20,
    height: 20,
    position: "absolute",
    bottom: 16,
    end: 16
  },
  hideSendFail: {
    width: 0,
    height: 0
  }
});

export default ChatItem;

import { Alert, Modal, SafeAreaView, StyleSheet } from "react-native";
import HeadChatComponent from "./HeadChatComponent/HeadChatComponent";
import ChatContentComponent from "./ChatContentComponent/ChatContentComponent";
import BottomToolChatComponent from "./BottomToolChatComponent/BottomToolChatComponent";
import { ChatModel, MessageStatus } from "../../model/chat-model";
import React, { useState } from "react";
import moment from "moment";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList, Screens } from "../../Navigation/Navigator.config";

const ChatScreen = () => {
  const lsChat = [
    new ChatModel(1, "tao la viet ne", true,
      moment().subtract(30, "minutes").valueOf(), MessageStatus.SENT),
    new ChatModel(2, "Viet hã, lâu ngày không gặp", false,
      moment().subtract(20, "minutes").valueOf(), MessageStatus.RECEIVED),
    new ChatModel(3, "Dạo này khoẻ không mi?", false,
      moment().subtract(19, "minutes").valueOf(), MessageStatus.RECEIVED),
    new ChatModel(4, "Tao khoẻ lắm, còn m vẫn khoẻ chớ, alo alo nghe gọi trả lời nghe hú hé alo lao",
      true, moment().subtract(10, "minutes").valueOf(), MessageStatus.FAILED)
  ];

  const [conversation, addChat] = useState(lsChat);
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const goBack = () => {
    navigation.goBack();
  };

  const handleCallback = (mess: string) => {
    addChat(prevState => {
      let newMessages: ChatModel[] = [...prevState];
      newMessages.push(new ChatModel(6, mess, true, moment().valueOf(), MessageStatus.SENT));
      return newMessages;
    });

    const reply = async () => {
      await delay(3000);
      addChat(prevState => {
        let newMessages: ChatModel[] = [...prevState];
        newMessages.push(new ChatModel(6, "kakak hu he kakoaoaoa",
          false, moment().valueOf(), MessageStatus.RECEIVED));
        return newMessages;
      });
    };
    reply();
  };

  return <SafeAreaView style={styles.container}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}>

    </Modal>
    <HeadChatComponent onBackPress={goBack}/>
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

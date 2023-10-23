import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import FastImage from "react-native-fast-image";
import { images } from "../../../../assets/images";
import { EmployeeModel } from "../../../../model/employee-model";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: 62,
    marginRight: 8
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFF"
  },
  avatarStyleContainer: {
    width: 62,
    height: 62,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  nameContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  onlineStyle: {
    borderWidth: 3,
    borderColor: "#3FD3B1"
  },
  offlineStyle: {
    borderWidth: 0
  },
  textName: {
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    color: "#FFF",
    lineHeight: 14 * 1.5
  },
  textSub: {
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    color: "#94959B",
    lineHeight: 12 * 1.5
  }
});

export interface IFriendItem {
  model: EmployeeModel;
}

const FriendItem = ({ model }: IFriendItem) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View
        style={[
          styles.avatarStyleContainer,
          model.status == "active" ? styles.onlineStyle : styles.offlineStyle
        ]}>
        <FastImage
          source={images.imgAvatarDefault}
          style={styles.image}
          resizeMode={"cover"}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text numberOfLines={1} style={styles.textName}>{model.name}</Text>
        {model.gender && (
          <Text numberOfLines={1} style={styles.textSub}>
            {model.gender}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default memo(FriendItem);

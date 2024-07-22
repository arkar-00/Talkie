import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CommonHeader } from "components";
import { useSelector } from "react-redux";
import { Colors } from "styles";

const AddContactScreen = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <View
      style={[styles.container, { backgroundColor: Colors[theme].themeColor }]}
    >
      <CommonHeader title={"Add Contact"} />
    </View>
  );
};

export default AddContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

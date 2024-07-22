import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { LinearGradient } from "expo-linear-gradient";
import colors from "styles/Colors";
import { useNavigation } from "@react-navigation/native";
import { LeftIcon, RightIcon } from "assets/svg";
const { commonColor } = colors;

const CommonHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      style={{
        height: 70,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        minHeight: 70,
      }}
      colors={["#440083", "#9256D7"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <RightIcon />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 18,
          lineHeight: 20,
          textAlign: "center",
          color: commonColor.commonWhite,
          marginLeft: 10,
        }}
      >
        {title}
      </Text>
    </LinearGradient>
  );
};

export default memo(CommonHeader);

const styles = StyleSheet.create({
  container: {},
});

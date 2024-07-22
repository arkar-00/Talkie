import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "styles";
import { setCustomTheme } from "redux/slices/CustomThemeSlice";

const HomeScreen = () => {
  // const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: Colors[theme].themeColor,
      }}
    >
      {/* <Text style={{ color: Colors[theme].white }}>
        This is demo of default dark/light theme using navigation.
      </Text> */}
      <Text onPress={() => dispatch(setCustomTheme("dark"))}>Change</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});

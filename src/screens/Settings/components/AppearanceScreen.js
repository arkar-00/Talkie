import { StyleSheet, Switch, Text, View } from "react-native";
import React from "react";
import { CommonHeader } from "components";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "redux/slices/CustomThemeSlice";
import { Colors } from "styles";

const AppearanceScreen = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const toggleSwitch = () => {
    dispatch(toggleTheme());
  };
  return (
    <View
      style={[styles.container, { backgroundColor: Colors[theme].themeColor }]}
    >
      <CommonHeader title={"Appearance"} />
      {/* <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={theme === "light" ? "#f4f3f4" : "#f5dd4b"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={theme === "dark"}
      /> */}
    </View>
  );
};

export default AppearanceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

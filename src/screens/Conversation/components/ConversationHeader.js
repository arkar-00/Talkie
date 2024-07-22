import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "styles/Colors";
const { commonColor } = colors;
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { RightIcon } from "assets/svg";
import FONT_PRESETS from "assets/fonts";
import { Colors } from "styles";
import { useSelector } from "react-redux";
import { CustomIconButton, ThreeDotMenu } from "components";
const menuOptions = [
  {
    title: "Chat info",
    onPress: () => alert("Chat info"),
  },
  {
    title: "Create a group with Arkar",
    onPress: () => alert("Create a group with Arkar"),
  },

  {
    title: "Select messages",
    onPress: () => alert("Select messages"),
  },
  {
    title: "Search",
    onPress: () => alert("Search"),
  },
  {
    title: "Delete Chat",
    onPress: () => alert("Delete Chat"),
    titleColor: commonColor.commonRed,
  },
];

const ConversationHeader = ({ chatInfo, isGroup }) => {
  const navigation = useNavigation();
  const theme = useSelector((state) => state.theme.value);
  return (
    <LinearGradient
      style={styles.header}
      colors={
        theme === "light"
          ? ["#440083", "#9256D7"]
          : [Colors.dark.primary, Colors.dark.primary]
      }
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <RightIcon />
        </TouchableOpacity>
        <View style={styles.person}>
          <Ionicons name="person" size={20} color="white" />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text
            style={[FONT_PRESETS.eng_title, { color: commonColor.commonWhite }]}
          >
            {chatInfo.name}
          </Text>
          <Text
            style={[
              FONT_PRESETS.eng_small_text,
              { color: commonColor.commonWhite },
            ]}
          >
            {isGroup ? "2 Participants" : "Active"}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {/* {!isGroup && (
          <>
            <CustomIconButton
              icon={() => (
                <FontAwesome5
                  name="phone-alt"
                  size={20}
                  color={commonColor.commonWhite}
                />
              )}
            />
            <CustomIconButton
              icon={() => (
                <FontAwesome5
                  name="video"
                  size={20}
                  color={commonColor.commonWhite}
                />
              )}
            />
          </>
        )} */}
        <ThreeDotMenu options={menuOptions} />
      </View>
    </LinearGradient>
  );
};

export default ConversationHeader;

const styles = StyleSheet.create({
  header: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  person: {
    padding: 5,
    borderRadius: 50,
    backgroundColor: "grey",
  },
});

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "styles/Colors";
import { LinearGradient } from "expo-linear-gradient";
import {
  Atalk,
  Edit,
  LeftIcon,
  Logo,
  Logout,
  MakeGroup,
  QrCode,
  Settings,
  Share,
} from "assets/svg";
import { useNavigation } from "@react-navigation/native";
const { commonColor } = colors;

const list = [
  {
    label: "Settings",
    screen: "SettingScreen",
    icon: <Settings />,
  },
  {
    label: "Add Contacts",
    screen: "ContactScreen",
    icon: <MakeGroup />,
  },
  {
    label: "Invite Friends",
    screen: "InviteFriendScreen",
    icon: <Share />,
  },
  {
    label: "Log Out",
    icon: <Logout />,
  },
];

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#440083", "#9256D7"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          borderBottomRightRadius: 30,
          zIndex: 1,
          padding: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              resizeMode="contain"
              source={require("assets/png/common/HeaderLogo.png")}
              style={{ width: 100, height: 35 }}
            />
            <Text
              style={{
                fontSize: 22,
                fontWeight: 500,
                color: commonColor.commonWhite,
                marginLeft: 10,
              }}
            >
              Profile
            </Text>
          </View>
          <TouchableOpacity>
            <Edit />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("assets/png/profile/Profile.png")} />
            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  fontSize: 18,
                  color: commonColor.commonWhite,
                  fontWeight: 500,
                  lineHeight: 24,
                }}
              >
                Aung Phyo
              </Text>
              <Text style={{ fontSize: 14, color: "#F0F0F0", lineHeight: 20 }}>
                +959 712345678
              </Text>
              <Text style={{ fontSize: 12, color: "#F0F0F0", lineHeight: 20 }}>
                Last seen yesterday
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              padding: 10,
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
              backgroundColor: "#FFFFFF40",
            }}
          >
            <QrCode />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <LinearGradient
        colors={["#440083", "#9256D7"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: 100, top: 0, marginTop: -50, width: "90%" }}
      />
      <View
        style={{
          backgroundColor: commonColor.commonWhite,
          marginTop: -50,
          flex: 1,
          borderTopLeftRadius: 30,
          padding: 20,
        }}
      >
        {list.map((item, index) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottomWidth: list.length - 1 === index ? 0 : 1,
              paddingVertical: 10,
              borderColor: "#E5DFEB",
            }}
            onPress={() => {
              if (item.screen) {
                navigation.navigate(item.screen);
              }
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  padding: 10,
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  backgroundColor: "#F5ECFF",
                }}
              >
                {item.icon}
              </View>
              <Text style={{ marginLeft: 10 }}>{item.label}</Text>
            </View>
            <LeftIcon />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonColor.commonWhite,
  },
});

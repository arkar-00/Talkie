import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "styles/Colors";
import { CommonHeader } from "components";
import {
  AdminPanel,
  Appearance,
  Image,
  LeftIcon,
  Notifications,
  Person,
  PhoneSms,
  Settings,
} from "assets/svg";
import { useNavigation } from "@react-navigation/native";
const { commonColor } = colors;

const settingData = [
  {
    sectionHeader: "A plus Account",
    data: [
      {
        label: "General",
        icon: <Settings />,
      },
      {
        label: "Account",
        icon: <Person />,
      },
      {
        label: "Privacy",
        icon: <AdminPanel />,
      },
    ],
  },
  {
    sectionHeader: "Application",
    data: [
      {
        label: "Notification & Sound",
        icon: <Notifications />,
      },
      {
        label: "Calls and Messages",
        icon: <PhoneSms />,
      },
      {
        label: "Media & Storage",
        icon: <Image />,
      },
    ],
  },
  {
    sectionHeader: "Apperence",
    data: [
      {
        label: "Appearance",
        icon: <Appearance />,
        routeName: "AppearanceScreen",
      },
    ],
  },
];

const SettingScreen = () => {
  const navigation = useNavigation();

  const RenderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomWidth: settingData[0].data.length - 1 == index ? 0 : 1,
          paddingVertical: 10,
          borderColor: "#E5DFEB",
        }}
        onPress={() => {
          if (!item.routeName) return;
          navigation.navigate(item.routeName);
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
    );
  };
  return (
    <View style={styles.container}>
      <CommonHeader title={"Settings"} />
      <View
        style={{
          margin: 10,
          padding: 10,
          borderWidth: 1,
          borderColor: "#E5DFEB",
          borderRadius: 20,
        }}
      >
        <Text style={{ fontSize: 13, lineHeight: 18, fontWeight: 300 }}>
          {settingData[0].sectionHeader}
        </Text>
        {settingData[0].data.map((data, index) => (
          <RenderItem key={index} item={data} index={index} />
        ))}
      </View>
      <View
        style={{
          margin: 10,
          padding: 10,
          borderWidth: 1,
          borderColor: "#E5DFEB",
          borderRadius: 20,
        }}
      >
        <Text style={{ fontSize: 13, lineHeight: 18, fontWeight: 300 }}>
          {settingData[1].sectionHeader}
        </Text>
        {settingData[1].data.map((data, index) => (
          <RenderItem key={index} item={data} index={index} />
        ))}
      </View>
      <View
        style={{
          margin: 10,
          padding: 10,
          borderWidth: 1,
          borderColor: "#E5DFEB",
          borderRadius: 20,
        }}
      >
        <Text style={{ fontSize: 13, lineHeight: 18, fontWeight: 300 }}>
          {settingData[2].sectionHeader}
        </Text>
        {settingData[2].data.map((data, index) => (
          <RenderItem key={index} item={data} index={index} />
        ))}
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonColor.commonWhite,
  },
});

import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CommonHeader, CustomButton } from "components";
import {
  ArrowRight,
  ContactQr,
  NewContact,
  NewGroup,
  RightIcon,
} from "assets/svg";
import { Colors } from "styles";
import { useSelector } from "react-redux";
import FONT_PRESETS from "assets/fonts";
import { useNavigation } from "@react-navigation/native";

const NewChatScreen = () => {
  const theme = useSelector((state) => state.theme.value);
  const navigation = useNavigation();
  const DATA = [
    {
      label: "New Contact",
      icon: <NewContact />,
      routeName: "AddContactScreen",
    },
    {
      label: "New Group",
      icon: <NewGroup />,
      routeName: "NewGroupScreen",
    },
  ];
  const ListItem = ({ item }) => (
    <CustomButton
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 0,
        paddingVertical: 5,
      }}
      onPress={() => navigation.navigate(item?.routeName)}
    >
      <View style={styles.leftItem}>
        <View style={styles.icon}>{item?.icon}</View>
        <Text style={[FONT_PRESETS.eng_bold_label, { marginLeft: 10 }]}>
          {item?.label}
        </Text>
      </View>
      <View style={styles.rightItem}>
        {item?.label === "New Contact" && (
          <View style={{ padding: 10 }}>
            <ContactQr />
          </View>
        )}

        <ArrowRight />
      </View>
    </CustomButton>
  );
  return (
    <View
      style={[styles.container, { backgroundColor: Colors[theme].themeColor }]}
    >
      <CommonHeader title={"New Chat"} />
      <FlatList
        contentContainerStyle={{ padding: 10 }}
        data={DATA}
        renderItem={({ item, index }) => <ListItem item={item} />}
      />
    </View>
  );
};

export default NewChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    padding: 10,
    backgroundColor: Colors.commonColor.primary,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  rightItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftItem: {
    flexDirection: "row",
    alignItems: "center",
  },
});

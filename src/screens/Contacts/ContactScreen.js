import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useMemo, useState } from "react";
import { Chat, ContactUs } from "assets/svg";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ContentLayout, CustomHeader, RenderTab } from "components";

export const contactList = [
  {
    name: "Aung Aung",
    phoneNo: "09788453565",
    isATalkUser: true,
  },
  {
    name: "Aung Kyaw",
    phoneNo: "09788453565",
    isATalkUser: false,
  },
  {
    name: "Bo Bo",
    phoneNo: "09788453565",
    isATalkUser: false,
  },
  {
    name: "Bo Lay",
    phoneNo: "09788453565",
    isATalkUser: false,
  },
  {
    name: "Chaw Su",
    phoneNo: "09788453565",
    isATalkUser: true,
  },
];
const ContactScreen = () => {
  const tabData = ["All Contacts", "A Talk Contacts", "Invites"];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOnPressTab = (index) => {
    setSelectedIndex(index);
  };

  const filterContactList = useMemo(() => {
    switch (selectedIndex) {
      case 0:
        return contactList;
      case 1:
        return contactList.filter((contact) => contact.isATalkUser === true);
      case 2:
        return contactList.filter((contact) => contact.isATalkUser === false);
      default:
        return [];
    }
  }, [selectedIndex]);
  return (
    <View style={styles.container}>
      <CustomHeader />
      <ContentLayout>
        <RenderTab
          tabData={tabData}
          selectedIndex={selectedIndex}
          handleOnPressTab={handleOnPressTab}
        />
        <FlatList
          contentContainerStyle={{ padding: 10 }}
          data={filterContactList}
          renderItem={({ item, index }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    borderRadius: 50,
                    padding: 5,
                    backgroundColor: "grey",
                    marginRight: 10,
                  }}
                >
                  <Ionicons name="person" size={20} color="white" />
                </View>
                <Text>{item.name}</Text>
              </View>
              {item.isATalkUser ? (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity
                    style={{
                      padding: 5,
                      borderTopLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      backgroundColor: "#F0F0F0",
                      marginRight: 5,
                    }}
                  >
                    <Chat />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      padding: 5,
                      borderTopLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      backgroundColor: "#F0F0F0",
                    }}
                  >
                    <ContactUs />
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity
                  style={{
                    padding: 5,
                    borderTopLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    backgroundColor: "#F0F0F0",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      lineHeight: 18,
                      fontWeight: 500,
                      color: "#5400A9",
                    }}
                  >
                    Invite
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        />
      </ContentLayout>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

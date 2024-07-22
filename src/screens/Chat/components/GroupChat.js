import { FlatList, StyleSheet } from "react-native";
import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { ChatListItem } from "./ChatList";
import { useSelector } from "react-redux";

const data = [
  {
    id: 1,
    name: "Group 1",
    time: "08:47 pm",
    lastConversation: "hello",
  },
];

const GroupChat = () => {
  const navigation = useNavigation();
  const theme = useSelector((state) => state.theme.value);
  const handleOnPress = useCallback((item) => {
    navigation.navigate("ConversationScreen", {
      chatInfo: item,
      isGroup: true,
    });
  }, []);

  const renderItem = ({ item, index }) => {
    return (
      <ChatListItem item={item} theme={theme} handleOnPress={handleOnPress} />
    );
  };
  return (
    <FlatList
      contentContainerStyle={{ padding: 10 }}
      keyExtractor={(item) => item.id.toString()}
      data={data}
      renderItem={renderItem}
    />
  );
};

export default GroupChat;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
  },
});

import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import FONT_PRESETS from "assets/fonts";
import { useSelector } from "react-redux";
import { Colors } from "styles";
import { CustomButton, CustomMenu } from "components";
import { Delete, Hide, Mute, Pin } from "assets/svg";
const { commonColor } = Colors;

const data = [
  {
    id: 1,
    name: "Kaung Kaung",
    time: "08:47 pm",
    lastConversation: "hello",
  },
  {
    id: 2,
    name: "John Doe",
    time: "09:00 pm",
    lastConversation: "Hello world",
  },
  {
    id: 3,
    name: "Jane Smith",
    time: "10:15 pm",
    lastConversation: "Hey there!",
  },
  {
    id: 4,
    name: "Emily Brown",
    time: "11:30 pm",
    lastConversation: "How are you?",
  },
  {
    id: 5,
    name: "Michael Johnson",
    time: "Yesterday",
    lastConversation: "Nice to meet you!",
  },
  {
    id: 6,
    name: "Sophia Lee",
    time: "2 days ago",
    lastConversation: "What's up?",
  },
  {
    id: 7,
    name: "David Wilson",
    time: "3 days ago",
    lastConversation: "Good morning!",
  },
  {
    id: 8,
    name: "Emma Taylor",
    time: "4 days ago",
    lastConversation: "How was your weekend?",
  },
  {
    id: 9,
    name: "Liam Martinez",
    time: "Last week",
    lastConversation: "Happy birthday!",
  },
  {
    id: 10,
    name: "Olivia Garcia",
    time: "2 weeks ago",
    lastConversation: "See you later!",
  },
];

const options = [
  {
    title: "Hide",
    icon: <Hide />,
    onPress: () => console.log("Hide"),
  },
  {
    title: "Mute",
    icon: <Mute />,
    onPress: () => console.log("Mute"),
  },
  { title: "Pin", icon: <Pin />, onPress: () => console.log("Pin") },
  {
    title: "Delete",
    icon: <Delete />,
    onPress: () => console.log("Delete"),
    titleColor: commonColor.commonRed,
  },
];

export const ChatListItem = ({ item, theme, handleOnPress }) => (
  <CustomMenu
    options={options}
    anchorComponent={
      <CustomButton
        style={styles.container}
        onPress={() => handleOnPress(item)}
      >
        <View
          style={{ padding: 10, borderRadius: 50, backgroundColor: "grey" }}
        >
          <Ionicons name="person" size={24} color="white" />
        </View>
        <View style={{ flex: 1, marginLeft: 10 }}>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text
              style={[
                FONT_PRESETS.eng_title,
                { color: Colors[theme].whiteText },
              ]}
            >
              {item.name}
            </Text>
            <Text
              style={[
                FONT_PRESETS.eng_bold_label,
                { color: Colors[theme].whiteTextSecondary },
              ]}
            >
              {item.time}
            </Text>
          </View>
          <View>
            <Text
              style={[
                FONT_PRESETS.eng_small_text,
                { color: Colors[theme].whiteTextSecondary },
              ]}
            >
              {item.lastConversation}
            </Text>
          </View>
        </View>
      </CustomButton>
    }
  />
);

const ChatList = () => {
  const navigation = useNavigation();
  const theme = useSelector((state) => state.theme.value);
  const handleOnPress = useCallback((item) => {
    navigation.navigate("ConversationScreen", {
      chatInfo: item,
      isGroup: false,
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

export default ChatList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
});

import {
  Dimensions,
  FlatList,
  Pressable,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import colors from "styles/Colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import ConversationHeader from "./components/ConversationHeader";
import ConversationFooter from "./components/ConversationFooter";
import * as ImagePicker from "expo-image-picker";
import { Audio } from "expo-av";
import { useSelector } from "react-redux";
import { Colors, CommonStyles } from "styles";
import ConversationListItem from "./components/ConversationListItem";
import { groupMessagesByDate } from "utils";
import FONT_PRESETS from "assets/fonts";
import { Divider, Menu } from "react-native-paper";
const { height } = Dimensions.get("window");

const DATA = {
  conversation: {
    id: "12345",
    participants: [
      {
        id: "user1",
        name: "Alice",
      },
      {
        id: "user2",
        name: "Bob",
      },
    ],
    messages: [
      {
        id: "msg1",
        sender: "user1",
        content: "Hello, Bob!",
        timestamp: "2024-07-10T12:00:00Z",
      },
      {
        id: "msg2",
        sender: "user2",
        content: "Hi, Alice! How are you?",
        timestamp: "2024-07-10T12:01:00Z",
      },
      {
        id: "msg3",
        sender: "user1",
        content: "I'm good, thanks! How about you?",
        timestamp: "2024-07-10T12:02:00Z",
      },
      {
        id: "msg4",
        sender: "user2",
        content: "Doing well! Have you completed the project?",
        timestamp: "2024-07-10T12:03:00Z",
      },
      {
        id: "msg5",
        sender: "user1",
        content: "Yes, I finished it yesterday.",
        timestamp: "2024-07-10T12:04:00Z",
      },
      {
        id: "msg6",
        sender: "user2",
        content: "Another message from user2.",
        timestamp: "2024-07-10T12:05:00Z",
      },
      {
        id: "msg7",
        sender: "user1",
        content: "Another message from user1.",
        timestamp: "2024-07-10T12:06:00Z",
      },
      {
        id: "msg8",
        sender: "user2",
        content: "Yet another message from user2.",
        timestamp: "2024-07-10T12:07:00Z",
      },
      {
        id: "msg9",
        sender: "user1",
        content: "Yet another message from user1.",
        timestamp: "2024-07-10T12:08:00Z",
      },
      {
        id: "msg10",
        sender: "user2",
        content: "Final message from user2.",
        timestamp: "2024-07-10T12:09:00Z",
      },
    ],
  },
};

const ConversationScreen = () => {
  const navigation = useNavigation();
  const theme = useSelector((state) => state.theme.value);
  const route = useRoute();
  const { chatInfo, isGroup } = route.params;
  const [messages, setMessage] = useState(DATA.conversation.messages);
  const [recording, setRecording] = useState();
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [visible, setVisible] = useState(false);


  const openMenu = useCallback(() => setVisible(true), []);
  const closeMenu = useCallback(() => setVisible(false), []);

  const handlePress = useCallback(
    (action) => {
      closeMenu();
      action();
    },
    [closeMenu]
  );

  // Reverse the data
  const reversedData = groupMessagesByDate(messages)
    .map((section) => ({
      ...section,
      data: section.data.reverse(),
    }))
    .reverse();

  const sectionHeaderLineStyle = {
    height: 0.5,
    backgroundColor: Colors[theme].iconInactiveColor,
    flex: 0.3,
  };

  async function startRecording() {
    try {
      if (permissionResponse.status !== "granted") {
        console.log("Requesting permission..");
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    console.log("Recording stopped and stored at", uri);

    let content = {
      id: "msg" + Date.now(),
      sender: "user1",
      type: "audio",
      url: uri,
      timestamp: Date.now(),
    };
    setMessage((prev) => [...prev, content]);
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      let content = {
        id: "msg" + Date.now(),
        sender: "user1",
        type: "photo",
        url: result.assets[0].uri,
        timestamp: Date.now(),
      };
      setMessage((prev) => [...prev, content]);
    }
  };

  const handleOnSend = (messageText) => {
    let content = {
      id: "msg" + Date.now(),
      sender: "user1",
      content: messageText,
      timestamp: Date.now(),
    };

    setMessage((prev) => [...prev, content]);
  };

  const renderItem = ({ item }) => (
    <ConversationListItem
      sender={item.sender}
      content={item.content}
      timestamp={item.timestamp}
      type={item.type}
      uri={item?.url}
    />
  );

  return (
    <View
      style={[styles.container, { backgroundColor: Colors[theme].themeColor }]}
    >
      <ConversationHeader chatInfo={chatInfo} isGroup={isGroup} />
      <SectionList
        inverted
        style={{ height: 0 }}
        sections={reversedData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
        renderSectionHeader={({ section: { date } }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={sectionHeaderLineStyle} />
            <Text
              style={[
                { padding: 10, color: Colors[theme].iconInactiveColor },
                FONT_PRESETS.eng_small_text,
              ]}
            >
              {date}
            </Text>
            <View style={sectionHeaderLineStyle} />
          </View>
        )}
        contentContainerStyle={styles.flatListContentContainer}
        stickySectionHeadersEnabled={false}
      />
      <ConversationFooter
        onPressGallery={pickImage}
        onPressRecord={recording ? stopRecording : startRecording}
        onPressSend={handleOnSend}
      />
    </View>
  );
};

export default ConversationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContentContainer: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  flatList: {},
  sectionHeader: {
    padding: 10,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

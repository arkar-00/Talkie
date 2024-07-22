import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "react-native";
import { formatTime } from "utils";
import { useSelector } from "react-redux";
import { Colors } from "styles";
import FONT_PRESETS from "assets/fonts";
import {
  Copy,
  Delete,
  Delivered,
  Forward,
  Pause,
  Pin,
  Play,
  Reached,
  Reply,
  Seen,
  Voice,
} from "assets/svg";
import { Audio } from "expo-av";
import { CustomButton, CustomIconButton, CustomMenu } from "components";
const { width } = Dimensions.get("window");
const { commonColor } = Colors;

const ALICE_ID = "user1";
const BOB_ID = "user2";

const ConversationListItem = ({
  sender,
  content,
  timestamp,
  type,
  uri,
  chatStatus = "isSeen",
  customStyle,
  onLongPress,
  onPress,
}) => {
  const isAlice = sender === ALICE_ID;
  const theme = useSelector((state) => state.theme.value);
  const [sound, setSound] = useState(null);
  const [status, setStatus] = useState({});
  const containerStyle = isAlice ? styles.itemRight : styles.itemLeft;
  const contentStyle = isAlice
    ? {
        backgroundColor: Colors[theme].firstPersonChatBg,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
      }
    : {
        backgroundColor: Colors[theme].secondPersonChatBg,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
      };

  const renderStatus = useMemo(() => {
    const item = {
      isDelivered: <Delivered />,
      isReached: <Reached />,
      isSeen: <Seen />,
    };

    return item[chatStatus];
  }, [chatStatus]);

  const options = [
    { title: "Reply", icon: <Reply />, onPress: () => console.log("Reply") },
    { title: "Copy", icon: <Copy />, onPress: () => console.log("Copy") },
    {
      title: "Forward",
      icon: <Forward />,
      onPress: () => console.log("Forward"),
    },
    { title: "Pin", icon: <Pin />, onPress: () => console.log("Pin") },
    {
      title: "Delete",
      icon: <Delete />,
      onPress: () => console.log("Delete"),
      titleColor: commonColor.commonRed,
    },
  ];

  const updatePlaybackStatus = (status) => {
    setStatus(status);
  };

  const handlePlaySound = async (uri) => {
    if (uri) {
      await playSound(uri);
    } else {
      console.log("No recording to play");
    }
  };

  const playSound = async (uri) => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: uri },
      { shouldPlay: true }
    );
    setSound(sound);
    sound.setOnPlaybackStatusUpdate(updatePlaybackStatus);
  };

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
    }
  };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return (
    <View style={[styles.item, containerStyle, customStyle]}>
      {!isAlice && (
        <Image
          source={require("assets/png/profile/Profile.png")}
          style={styles.profileImage}
        />
      )}
      <CustomMenu
        // contentStyle={{ justifyContent: isAlice ? "flex-end" : "flex-start" }}
        options={options}
        anchorComponent={
          <CustomButton
            style={[styles.messageContainer, contentStyle]}
            onLongPress={onLongPress}
            // onPress={onPress}
          >
            <View style={{ flex: 1 }}>
              {content && (
                <Text
                  style={[
                    FONT_PRESETS.eng_body_text,
                    { color: Colors[theme].whiteText },
                  ]}
                >
                  {content}
                </Text>
              )}
              {type === "photo" && (
                <Image source={{ uri: uri }} style={styles.image} />
              )}
              {type === "audio" && (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <CustomIconButton
                    icon={status.isPlaying ? <Pause /> : <Play />}
                    onPress={() => {
                      status.isPlaying ? pauseSound() : handlePlaySound(uri);
                    }}
                  />
                  <Voice />
                  {/* <Text
                    style={[
                      FONT_PRESETS.eng_body_text,
                      { color: Colors[theme].whiteText },
                    ]}
                  >
                    {status.positionMillis / 1000} s
                  </Text> */}
                  {/* <Text>Position: {status.positionMillis} ms</Text>
                  <Text>Duration: {status.durationMillis} ms</Text> */}
                </View>
              )}
            </View>
            <View
              style={{
                width: 65,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Text
                style={{
                  ...FONT_PRESETS.eng_small_text,
                  fontSize: 11,
                  color: Colors[theme].whiteText,
                  textAlign: "right",
                }}
              >
                {formatTime(timestamp)}
              </Text>
              {isAlice && renderStatus}
            </View>
          </CustomButton>
        }
      />
    </View>
  );
};

export default ConversationListItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  itemLeft: {
    justifyContent: "flex-start",
  },
  itemRight: {
    justifyContent: "flex-end",
  },
  profileImage: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 50,
  },
  messageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    maxWidth: width / 1.5,
    alignItems: "flex-end",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  timestamp: {
    fontSize: 10,
    textAlign: "right",
  },
});

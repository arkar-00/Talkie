import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import colors from "styles/Colors";
import { Gallery, Other, Send, Sticker, VoiceRecord } from "assets/svg";
import { useSelector } from "react-redux";
import { Colors } from "styles";
import EmojiSelector from "react-native-emoji-selector";
import EmojiPicker from "emoji-picker-react";

const ConversationFooter = ({ onPressGallery, onPressRecord, onPressSend }) => {
  const [messageText, setMessageText] = useState("");
  const theme = useSelector((state) => state.theme.value);
  const [showEmoji, setShowEmoji] = useState(false);

  return (
    <>
      <View
        style={[
          styles.container,
          { backgroundColor: Colors[theme].themeColor },
        ]}
      >
        <Pressable style={styles.iconBtn}>
          <Other />
        </Pressable>
        <Pressable style={styles.iconBtn} onPress={onPressGallery}>
          <Gallery />
        </Pressable>
        <Pressable style={styles.iconBtn} onPress={onPressRecord}>
          <VoiceRecord />
        </Pressable>
        <View style={styles.input}>
          <TextInput
            style={{ flex: 1 }}
            placeholder="write a message"
            value={messageText}
            onChangeText={setMessageText}
          />
          <Pressable onPress={() => setShowEmoji(!showEmoji)}>
            <Sticker />
          </Pressable>
        </View>
        <Pressable
          style={styles.iconBtn}
          onPress={() => {
            onPressSend(messageText), setMessageText("");
          }}
        >
          <Send width={35} height={35} />
        </Pressable>
      </View>
      {showEmoji && (
        <View style={{ height: 400 }}>
          <EmojiPicker
            onEmojiClick={(value) =>
              setMessageText((prev) => prev + value.emoji)
            }
            theme={theme}
            skinTonesDisabled
            width={"100%"}
            // height={300}
          />
          {/* <EmojiSelector
              onEmojiSelected={(emoji) =>
                setMessageText((prev) => prev + emoji)
              }
            /> */}
        </View>
      )}
    </>
  );
};

export default ConversationFooter;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    padding: 10,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
  },
  iconBtn: {
    padding: 3,
  },
});

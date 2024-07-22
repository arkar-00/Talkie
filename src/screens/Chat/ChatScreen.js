import { StyleSheet, View } from "react-native";
import React, { useMemo, useState } from "react";
import ChatList from "./components/ChatList";
import GroupChat from "./components/GroupChat";
import StickerList from "./components/StickerList";
import {
  ContentLayout,
  CustomHeader,
  FloatingButton,
  RenderTab,
} from "components";
import { AddChat } from "assets/svg";
import { Colors } from "styles";
import { useNavigation } from "@react-navigation/native";
const { commonColor } = Colors;

const ChatScreen = () => {
  const tabData = ["Chats", "Groups", "Stickers"];
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOnPressTab = (index) => {
    setSelectedIndex(index);
  };

  const renderComponent = useMemo(() => {
    switch (selectedIndex) {
      case 0:
        return <ChatList />;
      case 1:
        return <GroupChat />;
      case 2:
        return <StickerList />;
      default:
        return null;
    }
  }, [selectedIndex]);

  return (
    <View style={[styles.container]}>
      <CustomHeader isChatScreen />
      <ContentLayout>
        <RenderTab
          tabData={tabData}
          selectedIndex={selectedIndex}
          handleOnPressTab={handleOnPressTab}
        />
        {renderComponent}
      </ContentLayout>
      <FloatingButton onPress={() => navigation.navigate("NewChatScreen")}>
        <AddChat width={30} height={30} />
      </FloatingButton>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

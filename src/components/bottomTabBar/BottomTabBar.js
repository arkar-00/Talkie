import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { memo } from "react";
import colors from "styles/Colors";
import { useSelector } from "react-redux";
import { Colors } from "styles";
import { CallScreen, ChatScreen, ContactScreen, ProfileScreen } from "screens";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FONT_PRESETS from "assets/fonts";

const BottomTabBar = ({ state, descriptors, navigation }) => {
  const theme = useSelector((state) => state.theme.value);
  const TabNavigation = [
    {
      route: "ChatScreen",
      screen: ChatScreen,
      icon: (
        <Ionicons
          name="chatbubble-ellipses"
          size={20}
          color={Colors[theme].iconInactiveColor}
        />
      ),
      iconActive: (
        <Ionicons
          name="chatbubble-ellipses"
          size={20}
          color={Colors[theme].iconActiveColor}
        />
      ),
      name: "Chats",
    },
    {
      route: "CallScreen",
      screen: CallScreen,
      icon: (
        <FontAwesome5
          name="phone-alt"
          size={20}
          color={Colors[theme].iconInactiveColor}
        />
      ),
      iconActive: (
        <FontAwesome5
          name="phone-alt"
          size={20}
          color={Colors[theme].iconActiveColor}
        />
      ),
      name: "Calls",
    },
    {
      route: "ContactScreen",
      screen: ContactScreen,
      icon: (
        <MaterialCommunityIcons
          name="account-group"
          size={20}
          color={Colors[theme].iconInactiveColor}
        />
      ),
      iconActive: (
        <MaterialCommunityIcons
          name="account-group"
          size={20}
          color={Colors[theme].iconActiveColor}
        />
      ),
      name: "Contacts",
    },
    {
      route: "ProfileScreen",
      screen: ProfileScreen,
      icon: (
        <Ionicons
          name="person-sharp"
          size={20}
          color={Colors[theme].iconInactiveColor}
        />
      ),
      iconActive: (
        <Ionicons
          name="person-sharp"
          size={20}
          color={Colors[theme].iconActiveColor}
        />
      ),
      name: "Profile",
    },
  ];
  return (
    <View
      style={[
        styles.tab,
        { backgroundColor: theme == "light" ? "#FFFFFF" : "#1B1B1B" },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
          >
            {TabNavigation?.map((item, index) => {
              if (item.route == route.name) {
                if (isFocused) {
                  return <View key={index}>{item.iconActive}</View>;
                } else {
                  return <View key={index}>{item.icon}</View>;
                }
              }
            })}

            {TabNavigation?.map((item, index) => {
              if (item.route == route.name) {
                if (isFocused) {
                  return (
                    <Text
                      style={[
                        styles.title,
                        FONT_PRESETS.small_text,
                        { color: Colors[theme].iconActiveColor },
                      ]}
                      key={index}
                    >
                      {item.name}
                    </Text>
                  );
                } else {
                  return (
                    <Text
                      key={index}
                      style={[
                        FONT_PRESETS.small_text,
                        { color: Colors[theme].iconInactiveColor },
                      ]}
                    >
                      {item.name}
                    </Text>
                  );
                }
              }
            })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default memo(BottomTabBar);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    flexDirection: "row",
    paddingVertical: 15,
    borderTopWidth: 0.5,
    borderColor: Colors.commonColor.darkPallette09,
  },
  title: {
    fontSize: 10,
    lineHeight: 16,
  },
  activeTitle: {
    color: colors.commonColor.commonGreen,
  },
});

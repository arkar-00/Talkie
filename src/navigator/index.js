import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";
import { useSelector } from "react-redux";
import {
  AddContactScreen,
  AppearanceScreen,
  ConversationScreen,
  NewChatScreen,
  NewGroupScreen,
  SearchScreen,
  SettingScreen,
  SplashScreen,
} from "screens";
import {
  DefaultTheme,
  MD2DarkTheme,
  MD2LightTheme,
  PaperProvider,
} from "react-native-paper";

const Stack = createStackNavigator();

const RootNavigator = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <PaperProvider theme={theme === "dark" ? MD2DarkTheme : MD2LightTheme}>
      <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack.Navigator
          screenOptions={() => {
            return {
              headerShown: false,
            };
          }}
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
          />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen
            name="ConversationScreen"
            component={ConversationScreen}
          />
          <Stack.Screen name="NewChatScreen" component={NewChatScreen} />
          <Stack.Screen name="AddContactScreen" component={AddContactScreen} />
          <Stack.Screen name="NewGroupScreen" component={NewGroupScreen} />
          <Stack.Screen name="SettingScreen" component={SettingScreen} />
          <Stack.Screen name="AppearanceScreen" component={AppearanceScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});

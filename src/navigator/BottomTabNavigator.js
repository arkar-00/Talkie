import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabBar } from "components";
import { CallScreen, ChatScreen, ContactScreen, ProfileScreen } from "screens";

const Tab = createBottomTabNavigator();
const TabNavigation = [
  {
    route: "ChatScreen",
    screen: ChatScreen,
    name: "Chats",
  },
  {
    route: "CallScreen",
    screen: CallScreen,
    name: "Calls",
  },
  {
    route: "ContactScreen",
    screen: ContactScreen,
    name: "Contacts",
  },
  {
    route: "ProfileScreen",
    screen: ProfileScreen,
    name: "Profile",
  },
];

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      {TabNavigation?.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.screen} />
        );
      })}
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

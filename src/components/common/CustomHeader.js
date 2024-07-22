import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  ATalkLogoDark,
  AddChat,
  AddContact,
  Search,
  SearchChat,
} from "assets/svg";
import { useSelector } from "react-redux";
import { Colors } from "styles";

const CustomHeader = ({ isChatScreen = false }) => {
  const navigation = useNavigation();
  const theme = useSelector((state) => state.theme.value);
  return (
    <>
      <LinearGradient
        colors={
          theme === "light"
            ? ["#440083", "#9256D7"]
            : [Colors.dark.primary, Colors.dark.primary]
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          borderBottomRightRadius: 30,
          zIndex: 1,
          padding: 20,
          minHeight: 70,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            resizeMode="contain"
            source={require("assets/png/common/HeaderLogo.png")}
            style={{ width: 100, height: 35 }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {isChatScreen && (
              <>
                <TouchableOpacity
                  onPress={() => navigation.navigate("SearchScreen")}
                >
                  <SearchChat />
                </TouchableOpacity>
                {/* <TouchableOpacity>
                  <AddChat />
                </TouchableOpacity> */}
              </>
            )}
          </View>
        </View>
      </LinearGradient>
      <LinearGradient
        colors={
          theme === "light"
            ? ["#440083", "#9256D7"]
            : [Colors.dark.primary, Colors.dark.primary]
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: 100, top: 0, marginTop: -50, width: "90%" }}
      />
    </>
  );
};

export default memo(CustomHeader);

const styles = StyleSheet.create({});

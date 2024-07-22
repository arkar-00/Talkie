import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "styles/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "styles";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
const { commonColor } = colors;

const SearchScreen = () => {
  const navigation = useNavigation();
  const theme = useSelector((state) => state.theme.value);
  return (
    <LinearGradient
      style={{
        height: 70,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
      colors={
        theme === "light"
          ? ["#440083", "#9256D7"]
          : [Colors.dark.primary, Colors.dark.primary]
      }
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-sharp"
            size={24}
            color={commonColor.commonWhite}
          />
        </TouchableOpacity>

        <TextInput placeholder="Search" style={styles.input} />
      </View>
    </LinearGradient>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  header: {
    flex:1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    backgroundColor: commonColor.commonWhite,
    height: 40,
    borderRadius: 10,
    marginLeft: 10,
    paddingHorizontal: 10,
    flex:1
  },
});

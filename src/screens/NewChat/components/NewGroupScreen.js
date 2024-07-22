import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CommonHeader, CustomIconButton } from "components";
import { useSelector } from "react-redux";
import { Colors } from "styles";
import { RadioButton, Searchbar } from "react-native-paper";
import FONT_PRESETS from "assets/fonts";
import { CloseIcon } from "assets/svg";
import { contactList } from "screens/Contacts/ContactScreen";
const { commonColor } = Colors;


const NewGroupScreen = () => {
  const theme = useSelector((state) => state.theme.value);
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <View
      style={[styles.container, { backgroundColor: Colors[theme].themeColor }]}
    >
      <CommonHeader title={"New Group"} />
      <View style={styles.body}>
        <Searchbar
          mode="bar"
          placeholder="Search for people to add"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={{
            borderWidth: 1,
            borderRadius: 16,
            borderColor: commonColor.borderColor,
            shadowColor: "transparent",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0,
            shadowRadius: 0,
            elevation: 0, // For Android
          }}
        />
        <View style={{ marginTop: 10 }}>
          <Text style={FONT_PRESETS.eng_body_text}>Participants(6/180)</Text>
          <View style={{ flexDirection: "row", paddingVertical: 10 }}>
            <View style={{ margin: 3 }}>
              <Image
                source={require("assets/png/profile/Profile.png")}
                style={{ width: 40, height: 40, borderRadius: 100 }}
              />
              <CustomIconButton
                style={{
                  position: "absolute",
                  top: -5,
                  right: -5,
                  backgroundColor: commonColor.commonWhite,
                  borderRadius: 50,
                  padding: 2,
                  borderWidth: 1,
                  borderColor: commonColor.borderColor,
                }}
                icon={<CloseIcon />}
              />
            </View>
          </View>
          <Text style={FONT_PRESETS.eng_body_text}>Contacts</Text>
          <FlatList
            data={contactList}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingVertical: 5,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={require("assets/png/profile/Profile.png")}
                    style={{ width: 40, height: 40, borderRadius: 100 }}
                  />
                  <Text
                    style={[FONT_PRESETS.eng_bold_label, { marginLeft: 10 }]}
                  >
                    {item?.name}
                  </Text>
                </View>
                <RadioButton
                  value="first"
                  // status={checked === "first" ? "checked" : "unchecked"}
                  // onPress={() => setChecked("first")}
                />
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default NewGroupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    padding: 10,
  },
});

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { Colors } from "styles";
import FONT_PRESETS from "assets/fonts";
import { useSelector } from "react-redux";

const RenderTab = ({ tabData, selectedIndex, handleOnPressTab }) => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <View style={{ flexDirection: "row", marginBottom: 10 }}>
      {tabData.map((tab, index) => (
        <TouchableOpacity
          onPress={() => handleOnPressTab(index)}
          key={index}
          style={{
            ...styles.btn,
            backgroundColor:
              selectedIndex === index
                ? Colors[theme].activeBgColor
                : Colors[theme].inactiveBgColor,
          }}
        >
          <Text
            style={[
              FONT_PRESETS.eng_bold_label,
              {
                color:
                  selectedIndex === index
                    ? Colors[theme].activeColor
                    : Colors[theme].inactiveColor,
              },
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default memo(RenderTab);

const styles = StyleSheet.create({
  btn: {
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

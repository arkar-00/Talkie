import FONT_PRESETS from "assets/fonts";
import React, { memo } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import { Colors } from "styles";

const FloatingButton = memo(
  ({ onPress, onLongPress, title, style, titleStyle, children }) => {
    const theme = useSelector((state) => state.theme.value);
    // Memoized style to avoid recalculations on every render
    const buttonStyle = StyleSheet.flatten([styles.button, style]);
    const combinedTitleStyle = StyleSheet.flatten([styles.title, titleStyle]);

    return (
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={({ pressed }) => [
          buttonStyle,
          {
            opacity: pressed ? 0.7 : 1,
            backgroundColor: Colors[theme].activeBgColor,
          },
        ]}
      >
        {children
          ? children
          : title && <Text style={combinedTitleStyle}>{title}</Text>}
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    padding: 8,
    position: "absolute",
    bottom: 50,
    right: 10,
    // backgroundColor: Colors.commonColor.primary,
    borderRadius: 100,
  },
  title: {
    ...FONT_PRESETS.eng_button,
  },
});

export default FloatingButton;

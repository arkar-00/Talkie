import FONT_PRESETS from "assets/fonts";
import React, { memo } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const CustomButton = memo(
  ({ onPress, onLongPress, title, style, titleStyle, children }) => {
    // Memoized style to avoid recalculations on every render
    const buttonStyle = StyleSheet.flatten([styles.button, style]);
    const combinedTitleStyle = StyleSheet.flatten([styles.title, titleStyle]);

    return (
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={({ pressed }) => [buttonStyle, { opacity: pressed ? 0.7 : 1 }]}
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
  },
  title: {
    ...FONT_PRESETS.eng_button,
  },
});

export default CustomButton;

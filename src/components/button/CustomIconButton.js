// CustomIconButton.js
import React, { memo } from "react";
import { Pressable, StyleSheet } from "react-native";

const CustomIconButton = memo(({ onPress, icon, style }) => {
  // Memoized style to avoid recalculations on every render
  const buttonStyle = StyleSheet.flatten([styles.button, style]);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [buttonStyle, { opacity: pressed ? 0.7 : 1 }]}
    >
      {icon}
    </Pressable>
  );
});

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
});

export default CustomIconButton;

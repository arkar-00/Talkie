import React, { useState, useCallback, memo } from "react";
import { View, StyleSheet } from "react-native";
import { Menu, Divider } from "react-native-paper";
import { CommonStyles } from "styles";
import FONT_PRESETS from "assets/fonts";

const CustomMenu = memo(
  ({ anchorComponent, options, contentStyle, containerStyle }) => {
    const [visible, setVisible] = useState(false);

    const openMenu = useCallback(() => setVisible(true), []);
    const closeMenu = useCallback(() => setVisible(false), []);

    const handlePress = useCallback(
      (action) => {
        closeMenu();
        action();
      },
      [closeMenu]
    );

    return (
      <View style={[styles.container, containerStyle]}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={React.cloneElement(anchorComponent, {
            // onPress: openMenu,
            onLongPress: openMenu,
          })}
          contentStyle={contentStyle || CommonStyles.aTalkBorderRadius}
        >
          {options.map((option, index) => (
            <React.Fragment key={index}>
              {index > 0 && option.type === "divider" && <Divider />}
              {option.type !== "divider" && (
                <Menu.Item
                  leadingIcon={() => option?.icon}
                  titleStyle={[
                    FONT_PRESETS.eng_body_text,
                    { color: option?.titleColor, marginLeft: -20 },
                  ]}
                  onPress={() => handlePress(option.onPress)}
                  title={option?.title}
                />
              )}
            </React.Fragment>
          ))}
        </Menu>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default CustomMenu;

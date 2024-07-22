import React, { useState, useCallback, memo } from "react";
import { View, StyleSheet } from "react-native";
import { Menu, Divider } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { Colors, CommonStyles } from "styles";
import CustomIconButton from "components/button/CustomIconButton";
import FONT_PRESETS from "assets/fonts";
const { commonColor } = Colors;

const ThreeDotMenu = memo(({ options }) => {
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
    <View style={styles.container}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <CustomIconButton
            icon={() => (
              <Feather
                name="more-vertical"
                size={20}
                color={commonColor.commonWhite}
              />
            )}
            onPress={openMenu}
          />
        }
        contentStyle={CommonStyles.aTalkBorderRadius}
      >
        {options.map((option, index) => (
          <React.Fragment key={index}>
            {index > 0 && option.type === "divider" && <Divider />}
            {option.type !== "divider" && (
              <Menu.Item
                titleStyle={[
                  FONT_PRESETS.eng_body_text,
                  { color: option?.titleColor },
                ]}
                onPress={() => handlePress(option.onPress)}
                title={option.title}
              />
            )}
          </React.Fragment>
        ))}
      </Menu>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ThreeDotMenu;

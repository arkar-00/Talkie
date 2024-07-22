import { StyleSheet, View } from "react-native";
import React, { memo } from "react";
import { Colors } from "styles";
import { useSelector } from "react-redux";

const ContentLayout = (props) => {
  const { children, ...rest } = props;
  const { value: theme } = useSelector((state) => state.theme);
  return (
    <View
      style={[styles.container, { backgroundColor: Colors[theme].themeColor }]}
      {...rest}
    >
      {children}
    </View>
  );
};

export default memo(ContentLayout);

const styles = StyleSheet.create({
  container: {
    marginTop: -50,
    flex: 1,
    borderTopLeftRadius: 30,
    paddingVertical: 10,
  },
});

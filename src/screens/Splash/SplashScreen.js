import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "styles";
import { Footer, LogoContent, Pattern } from "assets/svg";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate("BottomTabNavigator");
    }, 500);

    return () => clearTimeout(timeoutId); // Clear timeout on cleanup
  }, [navigation]);
  return (
    <View style={styles.container}>
      <LogoContent width={width / 2.5} />
      <View style={{ position: "absolute", bottom: height / 30, right: 0 }}>
        <Pattern width={width / 2} />
      </View>
      <View style={{ position: "absolute", bottom: 20 }}>
        <Footer />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.commonColor.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});

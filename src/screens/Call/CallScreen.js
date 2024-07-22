import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { ContentLayout, CustomHeader, RenderTab } from "components";
const tabData = ["All Calls", "Missed Calls"];

const CallScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleOnPressTab = (index) => {
    setSelectedIndex(index);
  };

  return (
    <View style={styles.container}>
      <CustomHeader />
      <ContentLayout>
        <RenderTab
          tabData={tabData}
          selectedIndex={selectedIndex}
          handleOnPressTab={handleOnPressTab}
        />
      </ContentLayout>
    </View>
  );
};

export default CallScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

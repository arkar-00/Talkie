import { View } from "react-native";
import React from "react";
import RootNavigator from "./navigator";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "redux/store";

const AppRoot = () => {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    </View>
  );
};

export default AppRoot;

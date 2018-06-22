import React, { Component } from "react";

import AppStack from "./src/navigators/App";
import AuthStack from "./src/navigators/Auth";
import AuthLoading from "./src/screens/AuthLoading";

import { createSwitchNavigator } from "react-navigation";

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

export default class App extends Component<Props> {
  render() {
    return <AppNavigator persistenceKey="NavigatorKey12" />;
  }
}

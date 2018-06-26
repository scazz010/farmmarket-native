import { createTabNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import FarmScreen from "../screens/explore/Farms";

import listings from "../data/exploreListing";

import RoundedTabBar from "./components/RoundedTabBar";

import {
  createNavigator,
  createNavigationContainer,
  TabRouter
} from "react-navigation";

const getScreen = screenType => {
  switch (screenType) {
    case "FarmScreen":
      return FarmScreen;
  }
};

const buildRouterConfig = function() {
  let router = {};

  listings.map(route => {
    const screen = getScreen(route.screenType);
    if (screen) {
      router[route.name] = {
        screen: screen,
        navigationOptions: ({ navigation }) => ({
          backgroundImage: route.photo,
          backgroundColor: route.backgroundColor,
          textColor: route.textColor,
          listings: route.listings
        })
      };
    }
  });

  return router;
};

const ExploreTabRouter = TabRouter(buildRouterConfig(), {
  tabBarOptions: {}
});

const CustomTabs = createNavigationContainer(
  createNavigator(RoundedTabBar, ExploreTabRouter, {})
);

export default CustomTabs;

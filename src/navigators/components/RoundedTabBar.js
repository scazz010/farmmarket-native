import React from "react";
import { SafeAreaView, TabRouter } from "react-navigation";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground
} from "react-native";
import colors from "../../styles/colors";

const CustomTabBar = ({ navigation, descriptors }) => {
  const { routes, index } = navigation.state;
  return (
    <SafeAreaView style={styles.tabContainer}>
      {routes.map((route, index) => {
        const descriptor = descriptors[route.key];
        const {
          backgroundColor,
          backgroundImage,
          textColor
        } = descriptor.options;
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(route.routeName)}
            style={styles.tab}
            key={route.routeName}
          >
            <ImageBackground
              source={backgroundImage}
              style={[styles.tabImage, { backgroundColor }]}
            >
              <Text style={[{ color: textColor }, styles.tabText]}>
                {route.routeName}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

const CustomTabView = ({ descriptors, navigation }) => {
  const { routes, index } = navigation.state;
  const descriptor = descriptors[routes[index].key];
  const ActiveScreen = descriptor.getComponent();
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <CustomTabBar navigation={navigation} descriptors={descriptors} />
      <ActiveScreen navigation={descriptor.navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    height: 100
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
    backgroundColor: colors.blue,
    borderWidth: 1,
    borderColor: "#ddd",
    width: 90,
    height: 90,
    borderRadius: 90,
    overflow: "hidden"
  },
  tabImage: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    borderRadius: 90
  },
  tabText: {
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center"
  }
});

export default CustomTabView;

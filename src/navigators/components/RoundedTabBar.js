import React from "react";
import { SafeAreaView, TabRouter } from "react-navigation";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  ScrollView
} from "react-native";
import colors from "../../styles/colors";

const CustomTabBar = ({ navigation, descriptors }) => {
  const { routes, index } = navigation.state;
  return (
    <SafeAreaView style={styles.tabContainer}>
      {routes.map((route, currentIndex) => {
        const descriptor = descriptors[route.key];
        const {
          backgroundColor,
          backgroundImage,
          textColor
        } = descriptor.options;

        const routeIsActive = index === currentIndex;

        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(route.routeName)}
            style={styles.tab}
            key={route.routeName}
          >
            <View
              style={
                routeIsActive ? styles.activeImageWrapper : styles.imageWrapper
              }
            >
              <ImageBackground
                source={backgroundImage}
                style={[
                  styles.tabImage,
                  currentIndex === index ? styles.activeTabImage : {},
                  { backgroundColor: backgroundColor }
                ]}
              />
            </View>
            <Text style={[{ color: textColor }, styles.tabText]}>
              {route.routeName}
            </Text>
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
    <SafeAreaView style={styles.viewContainer} forceInset={{ top: "always" }}>
      <ScrollView
        style={styles.tabScrollWrapper}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <CustomTabBar navigation={navigation} descriptors={descriptors} />
      </ScrollView>
      <ScrollView>
        <ActiveScreen navigation={descriptor.navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const activeIconWidth = 70;
const inactiveIconWidth = 60;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1
  },
  tabContainer: {
    flexDirection: "row"
  },
  tabScrollWrapper: {
    height: 105,
    maxHeight: 105,
    flexShrink: 0
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    marginRight: 20,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column"
  },
  activeImageWrapper: { borderRadius: activeIconWidth, overflow: "hidden" },
  imageWrapper: {
    overflow: "hidden",
    borderRadius: inactiveIconWidth,
    width: inactiveIconWidth
  },
  tabImage: {
    width: inactiveIconWidth,
    height: inactiveIconWidth,
    justifyContent: "center",
    borderRadius: inactiveIconWidth
  },
  activeTabImage: {
    width: activeIconWidth,
    height: activeIconWidth
  },
  tabText: {
    fontWeight: "600",
    fontSize: 11,
    textAlign: "center",
    overflow: "hidden",
    width: inactiveIconWidth,
    paddingTop: 3
  }
});

export default CustomTabView;

import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import colors from "../styles/colors";
import RoundedButton from "../components/buttons/RoundedButton";
import NavActionButton from "../components/buttons/NavActionButton";
import { SearchBar } from "react-native-elements";

import ExporeTabNavigator from "../navigators/ExploreTabNavigator";

export default class Explore extends Component {
  static navigationOptions = {
    title: "Explore",
    tabBarIcon: <Icon name="globe" size={20} color={colors.light} />
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SearchBar
          lightTheme
          showLoading
          platform="android"
          cancelIcon={{ type: "font-awesome", name: "chevron-left" }}
          placeholder="Search"
        />
        <View style={styles.wrapper}>
          <View style={styles.exploreView}>
            <Text style={styles.heading}>Explore FarmMarket</Text>
          </View>
          <View style={{ flex: 1 }}>
            <ExporeTabNavigator />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    flex: 1,
    paddingLeft: 15,
    paddingRight: 10
  },
  exploreView: {
    paddingTop: 20
  },
  heading: {
    fontSize: 22,
    fontWeight: "600",
    paddingBottom: 15
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "600",
    paddingBottom: 15,
    paddingTop: 20
  }
});

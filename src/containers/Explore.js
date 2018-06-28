import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Text, View, ScrollView } from "react-native";
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
      <View style={{ flex: 1, display: "flex", justifyContent: "flex-start" }}>
        <SearchBar
          lightTheme
          showLoading
          platform="android"
          cancelIcon={{ type: "font-awesome", name: "chevron-left" }}
          placeholder="Search"
        />
        <ExporeTabNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    flex: 1,
    marginBottom: 40
  }
});

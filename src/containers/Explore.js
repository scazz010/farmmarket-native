import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import colors from "../styles/colors";
import RoundedButton from "../components/buttons/RoundedButton";
import NavActionButton from "../components/buttons/NavActionButton";
import SearchBar from "../components/SearchBar";
import Categories from "../components/explore/Categories";

import categories from "../data/categories";

export default class Explore extends Component {
  static navigationOptions = {
    title: "Explore",
    tabBarIcon: <Icon name="globe" size={20} color={colors.light} />
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar />

        <Text>Explore tab</Text>
        <Text>Hello</Text>
        <Categories categories={categories} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80
  }
});

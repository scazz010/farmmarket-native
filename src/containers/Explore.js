import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import colors from "../styles/colors";
import RoundedButton from "../components/buttons/RoundedButton";
import NavActionButton from "../components/buttons/NavActionButton";
import SearchBar from "../components/SearchBar";

export default class Explore extends Component {
  static navigationOptions = {
    title: "Explore",
    tabBarIcon: <Icon name="globe" size={20} color={colors.light} />
  };

  render() {
    return (
      <View style={styles.conatiner}>
        <SearchBar />

        <Text>Explore tab</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

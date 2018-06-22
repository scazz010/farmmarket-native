import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import colors from "../styles/colors";
import RoundedButton from "../components/buttons/RoundedButton";
import NavActionButton from "../components/buttons/NavActionButton";

export default class Explore extends Component {
  static navigationOptions = {
    title: "History",
    tabBarIcon: <Icon name="history" size={20} color={colors.light} />
  };
  render() {
    return (
      <View>
        <Text>History tab</Text>
      </View>
    );
  }
}

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import colors from "../styles/colors";

export default class Profile extends Component {
  static navigationOptions = {
    title: "Profile",
    tabBarIcon: <Icon name="user" size={20} color={colors.light} />
  };

  render() {
    return (
      <View>
        <Text>Profile tab</Text>
      </View>
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Easing,
  Animated
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import colors from "../styles/colors";

export default class SearchBar extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.searchContainer}>
          <Icon name="ios-search" size={20} style={styles.searchIcon} />
          <Text style={styles.searchInput}>Try "eggs"</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    width: "100%",
    height: 80
  },
  searchContainer: {
    display: "flex",
    borderWidth: 1,
    borderColor: colors.grey,
    backgroundColor: colors.white,
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    borderRadius: 3,
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    height: 40
  },
  searchIcon: {
    position: "absolute",
    left: 18,
    top: 9
  },
  searchInput: {
    display: "flex",
    marginLeft: 45,
    marginTop: 9
  }
});

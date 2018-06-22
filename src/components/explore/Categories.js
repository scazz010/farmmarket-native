import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Easing,
  Animated,
  TouchableHighlight,
  ScrollView
} from "react-native";

import CategoryCard from "./CategoryCard";

import Icon from "react-native-vector-icons/Ionicons";
import colors from "../../styles/colors";

export default class SearchBar extends Component {
  get Categories() {
    const { categories } = this.props;
    return categories.map(category => {
      return <CategoryCard name={category.name} />;
    });
  }

  render() {
    return <ScrollView horizontal={true}>{this.Categories}</ScrollView>;
  }
}

const styles = StyleSheet.create({
  container: {}
});

import React, { Component } from "react";
import PropTypes from "prop-types";

import { StyleSheet, View, Text, ScrollView } from "react-native";

import CategoryCard from "../../components/explore/CategoryCard";
import farms from "../../data/farms";

export default class Farms extends Component {
  get FarmCards() {
    return farms.map(farm => {
      <CategoryCard />;
    });
  }

  render() {
    return (
      <View>
        <Text>HEEEEELLLLOOO</Text>
        <Text>HEEEEELLLLOOO</Text>
        <Text>HEEEEELLLLOOO</Text>
        <Text>HEEEEELLLLOOO</Text>
        <Text>HEEEEELLLLOOO</Text>
        <Text>HEEEEELLLLOOO</Text>
        <Text>HEEEEELLLLOOO</Text>
        <Text>HEEEEELLLLOOO</Text>
      </View>
    );
  }
}

// Farms.propTypes = {
//   farms: PropTypes.array.isRequired
// };
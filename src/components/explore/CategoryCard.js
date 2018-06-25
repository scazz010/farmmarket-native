import React, { Component } from "react";
import PropTypes from "prop-types";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import colors from "../../styles/colors";

export default class CategoryCard extends Component {
  render() {
    const { name } = this.props;
    return (
      <TouchableOpacity
        style={[
          styles.card,
          this.props.isFirstElement ? { marginLeft: 0 } : {}
        ]}
      >
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
    );
  }
}

CategoryCard.propTypes = {
  isFirstElement: PropTypes.bool,
  name: PropTypes.string
};

const styles = StyleSheet.create({
  card: {
    width: 80,
    height: 80,
    backgroundColor: "#AA44AA",
    marginLeft: 8,
    marginRight: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginBottom: 10
  },
  name: {
    color: colors.light,
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center",
    paddingBottom: 10
  }
});

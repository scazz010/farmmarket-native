import React, { Component } from "react";
import PropTypes from "prop-types";

import { StyleSheet, ScrollView } from "react-native";

import CategoryCard from "./CategoryCard";

export default class Categories extends Component {
  get Categories() {
    const { categories } = this.props;
    return categories.map((category, index) => {
      return <CategoryCard name={category.name} isFirstElement={index === 0} />;
    });
  }

  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {this.Categories}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between"
  }
});

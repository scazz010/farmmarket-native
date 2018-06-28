import React, { Component } from "react";
import PropTypes from "prop-types";

import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Card, ListItem } from "react-native-elements";

import exploreListing from "../../data/exploreListing";

export default class Farms extends Component {
  get Farms() {
    const routeName = this.props.navigation.state.routeName;
    const currentRoute = exploreListing.find(route => route.name === routeName);
    return currentRoute.listings || [];
  }

  render() {
    return (
      <View style={{ marginBottom: 10 }}>
        {this.Farms.map((farm, index) => {
          return (
            <Card key={index} title={farm.name} image={farm.photo}>
              <Text>asdf</Text>
              <Text>asdf</Text>
              <Text>asdf</Text>
              <Text>asdf</Text>
              <Text>asdf</Text>
              <Text>asdf</Text>
              <Text>asdf2</Text>
            </Card>
          );
        })}
      </View>
    );
  }
}

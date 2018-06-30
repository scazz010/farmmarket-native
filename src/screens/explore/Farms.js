import React, { Component } from "react";
import PropTypes from "prop-types";

import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Card, Rating } from "react-native-elements";
import { Grid, Col, Row } from "react-native-easy-grid";

import Icon from "react-native-vector-icons/FontAwesome";

import exploreListing from "../../data/exploreListing";

const styles = StyleSheet.create({
  replyIcon: {
    paddingRight: 8,
    paddingLeft: 2
  },
  column: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    flex: 1,
    flexWrap: "wrap"
  }
});

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
              <View>
                <Text>{farm.description}</Text>
                <Grid>
                  <Row>
                    <Col style={styles.column}>
                      <Icon name="clock-o" style={styles.replyIcon} />
                      <Text style={styles.text}>
                        Typically replies {farm.replyTime}
                      </Text>
                    </Col>
                    <Col>
                      <Text>2 miles away</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Text>Average rating</Text>
                    </Col>
                    <Col>
                      <Rating
                        readonly={true}
                        imageSize={18}
                        startingValue={farm.starCount}
                        type="heart"
                      />
                    </Col>
                  </Row>
                </Grid>
              </View>
            </Card>
          );
        })}
      </View>
    );
  }
}

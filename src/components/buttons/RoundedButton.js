import React, { Component } from "react";
import PropTypes from "prop-types";

import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

import colors from "../../styles/colors";

export default class RoundedButton extends Component {
  render() {
    const { text, color, backgroundColor, handleOnPress, icon } = this.props;

    const background = backgroundColor || "transparent";
    const textColor = color || colors.dark;

    return (
      <TouchableHighlight
        style={[{ backgroundColor }, styles.container]}
        onPress={handleOnPress}
      >
        <View style={styles.buttonWrapper}>
          {icon}
          <Text
            style={[
              { color: textColor },
              { backgroundColor: background },
              styles.buttonText
            ]}
          >
            {text}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

RoundedButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  handleOnPress: PropTypes.func.isRequired,
  icon: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 15,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.light,
    marginBottom: 15,
    alignItems: "center"
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  buttonText: {
    fontSize: 27,
    width: "100%",
    textAlign: "center"
  },
  buttonIcon: {
    position: "relative"
  }
});

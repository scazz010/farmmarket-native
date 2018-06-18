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

import Icon from "react-native-vector-icons/FontAwesome";

import colors from "../styles/colors";

export default class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positionValue: new Animated.Value(-60)
    };

    this.closeNotification = this.closeNotification.bind(this);
  }

  animateNotification(value) {
    const { positionValue } = this.state;

    Animated.timing(positionValue, {
      toValue: value,
      duration: 300,
      velocity: 3,
      tension: 2,
      friction: 8,
      easing: Easing.easeInEaseOut
    }).start();
  }

  closeNotification() {
    this.props.handleClose();
  }

  render() {
    const { type, text, isShowing } = this.props;
    const { positionValue } = this.state;
    const typeColor = type === "error" ? colors.red : colors.dark;

    isShowing ? this.animateNotification(0) : this.animateNotification(-60);

    return (
      <Animated.View style={[{ marginBottom: positionValue }, styles.wrapper]}>
        <View style={styles.notificationContent}>
          <Text style={[{ color: typeColor }, styles.notificationType]}>
            {type}
          </Text>
          <Text style={styles.notificationText}>{text}</Text>
        </View>

        <TouchableOpacity
          style={styles.closeButton}
          onPress={this.closeNotification}
        >
          <Icon size={20} name="times" color={colors.grey} />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

Notification.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.light,
    width: "100%",
    padding: 10
  },
  notificationContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start"
  },
  notificationType: {
    fontSize: 14,
    marginBottom: 2,
    marginRight: 5
  },
  notificationText: {
    fontSize: 14
  },
  closeButton: {
    position: "absolute",
    right: 10,
    top: 10
  }
});

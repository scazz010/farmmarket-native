import React, { Component } from "react";
import PropTypes from "prop-types";

import LoadingIcon from "./loading/LoadingIcon";

import { StyleSheet, Modal, View } from "react-native";

export default class LoadingModal extends Component {
  render() {
    const { isVisible } = this.props;

    return (
      <Modal
        visible={isVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => {}}
      >
        <View style={styles.container}>
          <LoadingIcon />
        </View>
      </Modal>
    );
  }
}

LoadingModal.propType = {
  visible: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
  container: {
    zIndex: 9,
    backgroundColor: "rgba(0,0,0,0.6)",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  },
  loadingImage: {
    width: 90,
    height: 90,
    borderRadius: 15
  }
});

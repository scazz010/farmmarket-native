import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import colors from "../styles/colors";
import RoundedButton from "../components/buttons/RoundedButton";
import NavActionButton from "../components/buttons/NavActionButton";

export default class LoggedOut extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <NavActionButton
        text="Log in"
        location="right"
        onPress={() => navigation.navigate("LogIn")}
      />
    )
  });

  onFacebookPressed() {
    alert("facebook pressed!");
  }

  onCreateAccountPressed() {
    alert("create account");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeWrapper}>
          <Text style={styles.welcomeText}>Welcome to FarmMarket.</Text>

          <RoundedButton
            color={colors.green}
            backgroundColor={colors.light}
            text="Continue with FaceBook"
            icon={
              <Icon name="facebook" size={20} style={styles.facebookIcon} />
            }
            handleOnPress={this.onFacebookPressed}
          />

          <RoundedButton
            color={colors.light}
            text="Create Account"
            handleOnPress={this.onCreateAccountPressed}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center"
  },
  welcomeWrapper: {
    flex: 1,
    display: "flex",
    marginTop: 30,
    padding: 20
  },
  welcomeText: {
    color: colors.light,
    fontWeight: "300",
    fontSize: 30,
    marginBottom: 40
  },
  facebookIcon: {
    color: colors.green,
    position: "relative",
    left: 20,
    zIndex: 8
  }
});

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";

import colors from "../styles/colors";
import InputField from "../components/form/InputField";
import NextButton from "../components/buttons/NextButton";
import Notification from "../components/Notification";
import validateEmail from "../validators/EmailValidator";
import LoadingModal from "../components/LoadingModal";

export default class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formValid: true,
      emailValid: false,
      passwordValid: false,
      email: "",
      isLoading: false
    };

    this.onCloseNotification = this.onCloseNotification.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.nextButtonDisabledState = this.nextButtonDisabledState.bind(this);
    this.onNext = this.onNext.bind(this);
  }

  onCloseNotification() {
    this.setState({ formValid: true });
  }

  onNext() {
    this.setState({ isLoading: true });
    setTimeout(() => {
      if (this.state.email === "sam@sam.com") {
        this.props.navigation.navigate("App");
      } else {
        this.setState({
          formValid: false,
          isLoading: false
        });
      }
    }, 2000);
  }

  onEmailChange(email) {
    this.setState({
      email: email,
      emailValid: validateEmail(email)
    });
  }

  onPasswordChange(password) {
    this.setState({ passwordValid: password.length > 4 });
  }

  nextButtonDisabledState() {
    const { emailValid, passwordValid } = this.state;
    return !(emailValid && passwordValid);
  }

  render() {
    const { formValid, isLoading } = this.state;
    const showNotification = !formValid;

    return (
      <KeyboardAvoidingView
        style={[
          { backgroundColor: formValid ? colors.green : colors.red },
          styles.container
        ]}
      >
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.logInHeader}>Log In</Text>

            <InputField
              labelText="EMAIL ADDRESS:"
              inputType="email"
              onChange={this.onEmailChange}
            />
            <InputField
              labelText="PASSWORD:"
              inputType="password"
              onChange={this.onPasswordChange}
            />
          </ScrollView>

          <View style={styles.nextButton}>
            <NextButton
              onPress={this.onNext}
              disabled={this.nextButtonDisabledState()}
            />
          </View>

          <View>
            <Notification
              type="error"
              text="Those credentials don't match"
              handleClose={this.onCloseNotification}
              isShowing={showNotification}
            />
          </View>
        </View>
        <LoadingModal isVisible={isLoading} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex"
  },

  scrollViewWrapper: {
    marginTop: 45,
    flex: 1
  },
  scrollView: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1
  },

  logInHeader: {
    fontSize: 34,
    color: colors.light,
    fontWeight: "300",
    marginBottom: 30
  },
  nextButton: {
    alignItems: "flex-end",
    right: 20,
    bottom: 10
  }
});

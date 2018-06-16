import React, { Component } from 'react';
import {
    StyleSheet, Text, View,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';

import colors from '../styles/colors';
import InputField from "../components/form/InputField";
import NextButton from '../components/buttons/NextButton';
import Notification from "../components/Notification";
import validateEmail from "../validators/EmailValidator";

export default class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formValid: true,
            emailValid: false
        };

        this.onCloseNotification = this.onCloseNotification.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onNext = this.onNext.bind(this);
    }

    onCloseNotification() {
        this.setState({formValid: true});
    }

    onNext() {
        this.setState({
            formValid: this.state.emailValid
        });
    }

    onEmailChange(email) {
        this.setState({emailValid: validateEmail(email)});
    }

    // validateEmail(email) {
    //     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(String(email).toLowerCase());
    // }



    render() {
        const { formValid } = this.state;
        const showNotification = !formValid;

        return (
            <KeyboardAvoidingView style={[{backgroundColor: formValid ? colors.green : colors.red }, styles.container]}>
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.logInHeader}>Log In</Text>
                        
                        <InputField labelText="EMAIL ADDRESS:" inputType="email" onChange={this.onEmailChange}/>
                        <InputField labelText="PASSWORD:" inputType="password"/>
                    </ScrollView>

                    <View style={styles.nextButton}>
                        <NextButton onPress={this.onNext}/>
                    </View>

                    <View>
                        <Notification
                            type="error"
                            text="Those credentials don't match"
                            handleClose={this.onCloseNotification}
                            isShowing={showNotification}/>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
    },

    scrollViewWrapper: {
      marginTop: 30,
        flex: 1
    },
    scrollView: {
        padding: 20,
        flex: 1
    },

    logInHeader: {
        fontSize: 34,
        color: colors.light,
        fontWeight: '300',
        marginBottom: 40
    },
    nextButton: {
        alignItems: 'flex-end',
        right: 20,
        bottom: 10,
    }
});

import React, { Component } from 'react';
import {
    StyleSheet, Text, View,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../styles/colors';
import InputField from "../components/form/InputField";
import Notification from "../components/Notification";

export default class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formValid: false
        }

        this.onCloseNotification = this.onCloseNotification.bind(this);
    }

    onCloseNotification() {
        this.setState({formValid: true});
    }

    render() {
        const { formValid } = this.state;
        const showNotification = !formValid;

        return (
            <KeyboardAvoidingView style={[{backgroundColor: formValid ? colors.green : colors.red }, styles.container]}>
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.logInHeader}>Log In</Text>
                        
                        <InputField labelText="EMAIL ADDRESS:" inputType="email"/>
                        <InputField labelText="PASSWORD:" inputType="password"/>
                    </ScrollView>

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
    }
});

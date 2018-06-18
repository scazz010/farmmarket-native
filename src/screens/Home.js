import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../styles/colors';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello, you're in the app</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.green,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeWrapper: {
        flex: 1,
        display: 'flex',
        marginTop: 30,
        padding: 20
    },
    welcomeText: {
        color: colors.light,
        fontWeight: '300',
        fontSize: 30,
        marginBottom: 40,
    },
    facebookIcon: {
        color: colors.green,
        position: 'relative',
        left: 20,
        zIndex: 8
    }
});

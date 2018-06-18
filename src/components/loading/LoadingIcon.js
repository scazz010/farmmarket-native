import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Image
} from 'react-native';

export default class LoadingIcon extends Component {
    render() {
        return (
            <View style={styles.loadingContainer}>
                <Image style={styles.loadingImage} source={require('../../assets/loader.png')} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    loadingContainer: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: -45,
        marginTop: -45
    },
    loadingImage: {
        width: 90,
        height: 90,
        borderRadius: 15,
    }
});
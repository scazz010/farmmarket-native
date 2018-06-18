import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    StyleSheet,
    Text,
    Modal,
    View,
    Image
} from 'react-native';

export default class LoaderSpash extends Component {
    render() {
        return (
            <View style={styles.loadingContainer}>
                <Image style={styles.loadingImage} source={require('../../assets/loader.png')} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    loadingImage: {
        width: 90,
        height: 90,
        borderRadius: 15,

    }
});
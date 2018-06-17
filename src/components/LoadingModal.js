import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    StyleSheet,
    Text,
    Modal,
    View,
    Image
} from 'react-native';

import colors from '../styles/colors';

export default class LoadingModal extends Component {
    render() {
        const { isVisible } = this.props;

        return (
            <Modal
                visible={ isVisible }
                transparent={true}
                animationType="fade"
            >
                <View style={styles.container}>
                  <View style={styles.loadingContainer}>
                    <Image style={styles.loadingImage} source={require('../assets/loader.png')} />
                  </View>
                </View>
            </Modal>
        )
    }
}

LoadingModal.propType = {
  visible: PropTypes.bool.isRequired,

};

const styles = StyleSheet.create({
   container: {
       zIndex: 9,
       backgroundColor: 'rgba(0,0,0,0.6)',
       position: 'absolute',
       width: '100%',
       height: '100%',
       top: 0,
       left: 0
   },
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
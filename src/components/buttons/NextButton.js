import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import colors from '../../styles/colors';

export default class NextButton extends Component {
    render() {
        const { onPress, disabled } = Object.assign({
            disabled: false,
            ...this.props,
        });

        const opacityStyle = { backgroundColor: disabled ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.7)' };

        return (
            <TouchableHighlight style={[opacityStyle, styles.button]} onPress={onPress} disabled={disabled}>
                <Icon size={32} name="angle-right" color={colors.green} style={styles.icon} />
            </TouchableHighlight>
        );
    }
}

NextButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 50,
        height: 50,
    },
    icon: {
        marginRight: -4,
        marginTop: -2
    }
});

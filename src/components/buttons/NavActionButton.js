import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import colors from '../../styles/colors';

export default class NavActionButton extends Component {
    render() {
        const { text, location, color, onPress } = Object.assign({
            color: colors.light,
            ...this.props
        });

        const margin = location === "right" ? { marginRight: 20 } : { marginLeft: 20 };
        return (
            <TouchableOpacity style={[margin]} onPress={onPress}>
                <Text style={{color}}>{text}</Text>
            </TouchableOpacity>
        )
    }
}

NavActionButton.propTypes = {
    text: PropTypes.string,
    location: PropTypes.string,
    color: PropTypes.string,
    onPress: PropTypes.func
};
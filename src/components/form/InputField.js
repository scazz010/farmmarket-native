import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight
} from 'react-native';

import colors from '../../styles/colors';

export default class InputField extends Component {
    render() {
        const { labelText, labelFontSize, labelColor, inputColor, inputType, onChange } = Object.assign({
            labelFontSize: 14,
            labelColor: colors.light,
            inputColor: colors.light,
            inputType: 'default',
            ...this.props
        });

        return (
            <View style={styles.wrapper}>
                <Text style={[{color: labelColor, fontSize: labelFontSize}, styles.labelText]}>{labelText}</Text>
                <TextInput
                    autoCorrect={false}
                    style={[{color: inputColor, borderColor: inputColor}, styles.inputField]}
                    keyboardType={inputType === 'email' ? 'email-address' : 'default'}
                    secureTextEntry={inputType === 'password'}
                    underlineColorAndroid="transparent"
                    onChangeText={onChange}
                />
            </View>
        )
    }
}

InputField.propTypes = {
    labelText: PropTypes.string.isRequired,
    labelFontSize: PropTypes.number,
    labelColor: PropTypes.string,
    inputColor: PropTypes.string,
    inputType: PropTypes.string,
    onChange: PropTypes.func
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex'
    },
    labelText: {
        fontWeight: '700',
        marginBottom: 0
    },
    inputField: {
        borderBottomWidth: 1,
        marginBottom: 30,
    }
});
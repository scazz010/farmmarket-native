import React from 'react';
import {
    View,
} from 'react-native';

import LoadingModal from '../components/loading/LoaderSpash';

export default class AuthLoadingScreen extends React.Component {
    constructor() {
        super();
        this.bootstrapAsync();
    }

    bootstrapAsync = async () => {
        await this.wait2secs();
        this.props.navigation.navigate('Auth');
    };

    wait2secs() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    }


    // Render any loading content that you like here
    render() {
        return (
            <View style={{backgroundColor: 'white',
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0}}>
                <LoadingModal />
            </View>
        );
    }
};
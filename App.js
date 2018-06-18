import React, { Component } from 'react';

import AppStack from './src/navigators/App';
import AuthStack from './src/navigators/Auth';
import AuthLoading from './src/screens/AuthLoading';


import { StackNavigator, SwitchNavigator } from 'react-navigation';

export default SwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: AppStack,
        Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading',
    }
)

// export default class App extends Component<Props> {
//   render() {
//     return (
//       <LogIn />
//     );
//   }
// }
import { StackNavigator, SwitchNavigator } from 'react-navigation';
import HomeScreen from '../screens/Home';
import transparentHeaderStyles from '../styles/navigation';

const App = StackNavigator(
    {
        Home: HomeScreen,
    },
    {
        navigationOptions: {
            headerStyle: transparentHeaderStyles,
        }
    }
);

export default App;
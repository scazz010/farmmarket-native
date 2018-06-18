import { StackNavigator } from "react-navigation";
import LogInScreen from "../screens/LogIn";
import LoggedOutScreen from "../screens/LoggedOut";

import transparentHeaderStyles from "../styles/navigation";
import colors from "../styles/colors";

export default (AuthStack = StackNavigator(
  {
    LoggedOut: LoggedOutScreen,
    LogIn: LogInScreen
  },
  {
    navigationOptions: {
      headerStyle: transparentHeaderStyles,
      headerTintColor: colors.light,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
));

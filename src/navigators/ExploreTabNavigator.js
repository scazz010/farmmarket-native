import { createTabNavigator } from "react-navigation";
import transparentHeaderStyles from "../styles/navigation";

import ExploreContainer from "../containers/Explore";
import HistoryContainer from "../containers/History";
import ProfileContainer from "../containers/Profile";

import FarmScreen from "../screens/explore/Farms";

export default createTabNavigator(
  {
    Farms: { screen: FarmScreen },
    History: { screen: HistoryContainer }
  },
  {
    initialRouteName: "Farms",
    shifting: true
  }
);

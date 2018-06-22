import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import transparentHeaderStyles from "../styles/navigation";

import ExploreContainer from "../containers/Explore";
import HistoryContainer from "../containers/History";
import ProfileContainer from "../containers/Profile";

export default createMaterialBottomTabNavigator(
  {
    Profile: { screen: ProfileContainer },
    Explore: { screen: ExploreContainer },
    Lamo: { screen: ExploreContainer },
    History: { screen: HistoryContainer }
  },
  {
    initialRouteName: "Profile",
    tabBarOptions: {
      fontWeight: 600
    },
    shifting: true
  }
);

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Tab1Screen, Tab2Screen, Tab3Screen, Tab4Screen} from "../screens";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Tab1Screen' component={ Tab1Screen } />
      <Tab.Screen name='Tab2Screen' component={ Tab2Screen } />
      <Tab.Screen name='Tab3Screen' component={ Tab3Screen } />
      <Tab.Screen name='Tab4Screen' component={ Tab4Screen } />
    </Tab.Navigator>
  );
}

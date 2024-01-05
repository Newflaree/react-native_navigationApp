import { useWindowDimensions } from 'react-native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {SettingsScreen} from "../screens";
import {StackNavigator} from "./StackNavigator";


const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { width } = useWindowDimensions();
  console.log( width );


  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType: width >= 667 ? 'permanent' : 'front'
    }}
    >
      <Drawer.Screen
        name='StackNavigator'
        component={ StackNavigator }
        options={{
          title: 'Home',
        }}
      />

      <Drawer.Screen
        name='SettingsScreen'
        options={{ title: 'Setting' }}
        component={ SettingsScreen }
      />
    </Drawer.Navigator>
  );
}

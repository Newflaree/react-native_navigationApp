import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {AlbumsScreen, ChatScreen, ContactsScreen} from '../screens';


const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='ChatScreen' component={ ChatScreen } />
      <Tab.Screen name='ContactsScreen' component={ ContactsScreen } />
      <Tab.Screen name='AlbumsScreen' component={ AlbumsScreen } />
    </Tab.Navigator>
  );
}

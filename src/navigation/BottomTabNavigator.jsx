import { Text } from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Tab1Screen, Tab2Screen, Tab3Screen, Tab4Screen} from "../screens";
import {StackNavigator} from "./StackNavigator";
import {TopTabNavigator} from '.';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../theme';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={ ({ route }) => ({
        tabBarLabelStyle: {fontSize: 15},
        tabBarIcon: ({ color, focused, size }) => {
          let iconName = '';

          switch ( route.name ) {
            case 'Tab1Screen':
              iconName = 'airplane'
              break;
          
            case 'TopTabNavigator':
              iconName = 'attach'
              break;
          
            case 'Tab3Screen':
              iconName = 'calendar'
              break;
          
            case 'StackNavigator':
              iconName = 'chatbubble-ellipses'
              break;
          
            default:
              return 'ellipsis-horizontal'
          }

          return <Icon name={ iconName } size={ 20 } color={ colors.primary } />
        }
      })}
    >
            {/*
      screenOptions={{
        tabBarLabelStyle: { fontSize: 15 },
        tabBarIcon: ( props ) => {
          console.log( props );
          return <Text>T1</Text>
        }
      }}
                */}
      {/*<Tab.Screen name='Tab1Screen' options={{ title: 'Tab1', tabBarIcon: () => <Text>T1</Text> }} component={ Tab1Screen } />*/}
      <Tab.Screen name='Tab1Screen' options={{ title: 'Tab1' }} component={ Tab1Screen } />
      <Tab.Screen name='TopTabNavigator' options={{ title: 'TopTab' }} component={ TopTabNavigator } />
      <Tab.Screen name='Tab3Screen' options={{ title: 'Tab3' }} component={ Tab3Screen } />
      <Tab.Screen name='StackNavigator' options={{ title: 'Stacks' }} component={ StackNavigator } />
    </Tab.Navigator>
  );
}

// Navigators
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import {
  Page1Screen,
  Page2Screen,
  Page3Screen,
  UserScreen
} from '../screens';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      //initialRouteName='Page2Screen'
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroudColor: 'white'
        }
      }}
    >
      <Stack.Screen name='Page1Screen' component={ Page1Screen } />
      <Stack.Screen name='Page2Screen' component={ Page2Screen } />

      <Stack.Screen
        name='Page3Screen'
        component={ Page3Screen }
        options={{
          title: '3ra Page'
        }}
      />


      <Stack.Screen name='UserScreen' component={ UserScreen } />
    </Stack.Navigator>
  );
}

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator, StackNavigator} from './src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;

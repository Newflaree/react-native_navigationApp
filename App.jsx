import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator, SidemenuNavigator, StackNavigator} from './src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <SidemenuNavigator />
    </NavigationContainer>
  );
}

export default App;

import { TouchableOpacity, Image, Text, View, useWindowDimensions } from 'react-native';
import {createDrawerNavigator, DrawerContentScrollView} from "@react-navigation/drawer";
import {SettingsScreen} from "../screens";
import {StackNavigator} from "./StackNavigator";
import {styles} from '../theme';


const Drawer = createDrawerNavigator();

export const SidemenuNavigator = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 667 ? 'permanent' : 'front'
      }}
      drawerContent={ ( props ) => <SidemenuContent { ...props } /> }
    >
      <Drawer.Screen
        name='StackNavigator'
        component={ StackNavigator }
      />

      <Drawer.Screen
        name='SettingsScreen'
        component={ SettingsScreen }
      />
    </Drawer.Navigator>
  );
}

const SidemenuContent = ({ navigation }) => {
  console.log( navigation );

  return (
    <DrawerContentScrollView>
      { /*Avatar*/ }
      <View style={ styles.avatarContainer }>
        <Image
          source={{
            uri: 'https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif'
          }}
          style={ styles.avatar }
        />
      </View>

      { /*MenuOptions*/ }
      <View style={ styles.menuContainer }>
        <TouchableOpacity
          style={ styles.menuButton }
          onPress={ () => navigation.navigate( 'StackNavigator' ) }
        >
          <Text style={ styles.menuText }>Navegación Stack</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.menuButton }
          onPress={ () => navigation.navigate( 'SettingsScreen' ) }
        >
          <Text style={ styles.menuText }>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

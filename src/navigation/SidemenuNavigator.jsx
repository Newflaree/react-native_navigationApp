import { TouchableOpacity, Image, Text, View, useWindowDimensions } from 'react-native';
import {createDrawerNavigator, DrawerContentScrollView} from "@react-navigation/drawer";
import {SettingsScreen} from "../screens";
import {StackNavigator} from "./StackNavigator";
import {styles} from '../theme';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNavigator} from './BottomTabNavigator';
import {colors} from '../theme';
import Icon from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

export const SidemenuNavigator = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: width >= 667 ? 'permanent' : 'front'
      }}
      drawerContent={ ( props ) => <SidemenuContent { ...props } /> }
    >
      <Drawer.Screen
        name='BottomTabNavigator'
        component={ BottomTabNavigator }
      />

      <Drawer.Screen
        name='SettingsScreen'
        component={ SettingsScreen }
      />
    </Drawer.Navigator>
  );
}

const SidemenuContent = ({ navigation }) => {
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
          style={{
            ...styles.menuButton,
            flexDirection: 'row'
          }}
          onPress={ () => navigation.navigate( 'BottomTabNavigator' ) }
        >
          <Icon name='file-tray-stacked' size={ 20 } color={ colors.primary } />
          <Text style={ styles.menuText }> Navegación Stack</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.menuButton,
            flexDirection: 'row'
          }}
          onPress={ () => navigation.navigate( 'SettingsScreen' ) }
        >
          <Icon name='settings' size={ 23 } color={ colors.primary } />
          <Text style={ styles.menuText }> Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

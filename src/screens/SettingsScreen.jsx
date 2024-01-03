import { View, Text } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme';


export const SettingsScreen = () => {
  const inserts = useSafeAreaInsets();

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: inserts.top
    }}>
      <Text style={ styles.title }>SettingsScreen</Text>
    </View>
  );
}

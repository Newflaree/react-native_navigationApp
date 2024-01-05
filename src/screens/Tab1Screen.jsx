import { Text, View } from 'react-native';
import {colors, styles} from '../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Tab1Screen = () => {

  const { top } = useSafeAreaInsets();

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: top
    }}>
      <Text style={ styles.title }>Icons</Text>
      <Text>
        <Icon name='airplane' size={ 80 } color={ colors.primary } />
        <Icon name='apps' size={ 80 } color={ colors.primary } />
        <Icon name='attach' size={ 80 } color={ colors.primary } />
        <Icon name='calendar' size={ 80 } color={ colors.primary } />
        <Icon name='bonfire' size={ 80 } color={ colors.primary } />
        <Icon name='chatbubble-ellipses' size={ 80 } color={ colors.primary } />
        <Icon name='dice' size={ 80 } color={ colors.primary } />
      </Text>
    </View>
  );
}

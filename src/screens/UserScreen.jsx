import {useEffect} from 'react';
import { View, Text } from 'react-native';
import {styles} from '../theme';


export const UserScreen = ({ route, navigation }) => {
  const params = route.params;

  useEffect( () => {
    navigation.setOptions({
      title: params.name
    });
  }, [] )

  return (
    <View style={ styles.globalMargin }>
      <Text>
        {
          JSON.stringify( params, null, 2 )
        }
      </Text>
    </View>
  );
}

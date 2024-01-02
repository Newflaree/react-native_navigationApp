import { Button, View, Text } from 'react-native';
import {styles} from '../theme';


export const Page3Screen = ({ navigation }) => {
  return (
    <View style={ styles.globalMargin }>
      <Text>Page3Screen</Text>

      <Button
        title='Regresar'
        onPress={ () => navigation.pop() }
      />

      <Button
        title='Regresar al Inicio'
        onPress={ () => navigation.popToTop() }
      />
    </View>
  );
}

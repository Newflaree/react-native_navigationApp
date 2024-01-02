import { Button, View, Text } from 'react-native';
// Styles
import { styles } from '../theme';


export const Page2Screen = ({ navigation }) => {
  return (
    <View style={ styles.globalMargin }>
      <Text>Page2Screen</Text>

      <Button
        title='Ir Página 3'
      onPress={ () => navigation.navigate( 'Page3Screen' ) }
      />

      <Button
        title='Regresar'
        onPress={ () => navigation.pop() }
      />
    </View>
  );
}

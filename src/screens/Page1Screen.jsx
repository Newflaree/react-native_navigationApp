import { Button,View, Text } from 'react-native';
import { styles } from '../theme';


export const Page1Screen = ({ navigation }) => {
  
  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Page1Screen</Text>

      <Button
        title='Ir a Página 2'
        onPress={ () => navigation.navigate( 'Page2Screen' ) }
      />
    </View>
  );
}

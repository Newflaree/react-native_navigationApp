import { Button,View, Text } from 'react-native';
import {styles} from '../theme';


export const Page1Screen = ({ navigation }) => {

  console.log();
  
  return (
    <View style={ styles.globalMargin }>
      <Text>Page1Screen</Text>

      <Button
        title='Ir a Página 1'
        onPress={ () => navigation.navigate( 'Page2Screen' ) }
      />
    </View>
  );
}

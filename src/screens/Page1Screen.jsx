import {useEffect} from 'react';
import { TouchableOpacity, Button,View, Text } from 'react-native';
import { styles } from '../theme';


export const Page1Screen = ({ navigation }) => {
  useEffect( () => {
    navigation.setOptions({
      headerLeft: () => <Text>Hola Mundo</Text>
    });
  }, [] )
  
  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Page1Screen</Text>

      <Button
        title='Ir a Página 2'
        onPress={ () => navigation.navigate( 'Page2Screen' ) }
      />


      <Text style={ styles.subTitle }>Navegar con Argumentos</Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            ...styles.bigButton,
            backgroundColor: '#5856D6'
          }}
          onPress={ () => navigation.navigate( 'UserScreen', {
            id: 1,
            name: 'Pedro'
          })}
        >
          <Text style={ styles.buttonText }>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.bigButton,
            backgroundColor: '#FF9427'
          }}
          onPress={ () => navigation.navigate( 'UserScreen', {
            id: 2,
            name: 'Maria'
          })}
        >
          <Text style={ styles.buttonText }>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

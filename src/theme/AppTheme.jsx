import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#5856D6',
  secondary: '#FF9427',
}

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20
  },
  title: {
    textAlign: 'center',
   fontSize: 30,
    marginBottom: 10
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10
  },
  bigButton: {
    width: 100,
    height: 100,
    marginLeft: 10,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 30
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 20
  },
  menuButton: {
    marginVertical: 10
  },
  menuText: {
    fontSize: 20
  },
});


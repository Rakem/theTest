import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import Login from './Login';
import {PRIMARY_COLOR} from '../Constants';

const styles = {
  container: {
    backgroundColor: PRIMARY_COLOR.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function LoadingScreen({navigation}) {
  useEffect(() => {
    Login.isLoggedIn().then(token => {
      if (token) {
        navigation.navigate('App');
      } else {
        navigation.navigate('Login');
      }
    });
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
}

export default LoadingScreen;

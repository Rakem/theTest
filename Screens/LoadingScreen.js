import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import Login from './Login';

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
    <View>
      <ActivityIndicator />
    </View>
  );
}

export default LoadingScreen;

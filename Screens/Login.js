import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {Button, TextInput} from 'react-native';

const Login = ({navigation}) => {
  function doLogin() {
    navigation.navigate('App');
  }

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <TextInput value={userName} onChangeText={setUserName} />
      <TextInput value={password} onChangeText={setPassword} />
      <Button title={'Login'} onPress={doLogin} />
    </>
  );
};

Login.propTypes = {};

export default Login;

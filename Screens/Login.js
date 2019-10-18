import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, TextInput, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useMutation, useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const LOGIN_MUTATION = gql`
  mutation doLogin($userName: String!, $password: String!) {
    response: createToken(username: $userName, password: $password) {
      token
    }
  }
`;
const TOKEN_STORAGE_KEY = '@TOKEN_STORAGE_KEY';

const Login = ({navigation}) => {
  const [doLogin, {loading}] = useMutation(LOGIN_MUTATION);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  function onLoginPressed() {
    setError(undefined);
    setError('');
    doLogin({variables: {userName, password}})
      .then(({data}) => {
        return AsyncStorage.setItem(TOKEN_STORAGE_KEY, data.response.token);
      })
      .then(() => {
        navigation.navigate('App');
      })
      .catch(error => {
        setError(error);
      });
  }

  return (
    <>
      {!!error && <Text>{error.message}</Text>}
      <TextInput value={userName} onChangeText={setUserName}  autoCompleteType={'userName'}/>
      <TextInput value={password} onChangeText={setPassword} autoCompleteType={'password'}/>
      <Button title={'Login'} onPress={onLoginPressed} />
    </>
  );
};

Login.isLoggedIn = async function() {
  return await AsyncStorage.getItem(TOKEN_STORAGE_KEY);
};

Login.logOut = async function() {
  return await AsyncStorage.removeItem(TOKEN_STORAGE_KEY);
};

Login.propTypes = {};

export default Login;

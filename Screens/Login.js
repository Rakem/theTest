import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useMutation, useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {clearData} from '../server/server';
import {PRIMARY_COLOR} from '../Constants';
import CustomTextInput from '../components/CustomTextInput';

const LOGIN_MUTATION = gql`
  mutation doLogin($userName: String!, $password: String!) {
    response: createToken(username: $userName, password: $password) {
      token
    }
  }
`;
const TOKEN_STORAGE_KEY = '@TOKEN_STORAGE_KEY';

const styles={
container:{
  padding:10
}
}

const Login = ({navigation}) => {
  const [doLogin, {loading}] = useMutation(LOGIN_MUTATION);

  const [userName, setUserName] = useState('user');
  const [password, setPassword] = useState('password');
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
    <View style={styles.container}>
      {!!error && <Text>{error.message}</Text>}
      <CustomTextInput title="Username" value={userName} onChangeText={setUserName}/>
      <CustomTextInput title="Password" value={password} onChangeText={setPassword} secureTextEntry/>
      <Button title={'Login'} onPress={onLoginPressed} color={PRIMARY_COLOR.main}/>
    </View>
  );
};

Login.isLoggedIn = async function() {
  return await AsyncStorage.getItem(TOKEN_STORAGE_KEY);
};

Login.logOut = async function() {
  await clearData(); //just so we have a way to reset data
  return await AsyncStorage.removeItem(TOKEN_STORAGE_KEY);
};

Login.propTypes = {};


Login.navigationOptions = ({navigation}) => ({
  title:'Login',
});

export default Login;

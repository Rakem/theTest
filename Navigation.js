import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Screens/Login';
import Statistics from './Screens/Statistics';
import Grades from './Screens/Grades';
import NewGrade from './Screens/CustomGrade';
import GradeDetail from './Screens/GradeDetail';
import LoadingScreen from './Screens/LoadingScreen';
import {Text, TouchableOpacity, View} from 'react-native';
import {PRIMARY_COLOR, TEXT_COLOR} from './Constants';
import HeaderButton from './components/HeaderButton';

const headerLeftDefaultOptions = ({navigation}) => ({
  headerLeft: (
    <HeaderButton
      title="Logout"
      onPress={() => Login.logOut().then(() => navigation.navigate('Login'))}
    />
  ),
  headerStyle: {
    backgroundColor: PRIMARY_COLOR.main,
  },
  headerTintColor: TEXT_COLOR,
});
const gradesStack = createStackNavigator({
  Grades: {screen: Grades, navigationOptions: headerLeftDefaultOptions},
  NewGrade: {screen: NewGrade},
  GradeDetail: {screen: GradeDetail},
});

const statisticsStack = createStackNavigator(
  {
    Statistics: {screen: Statistics},
  },
  {
    defaultNavigationOptions: headerLeftDefaultOptions,
  },
);

const tabNavigator = createBottomTabNavigator({
  Grades: {screen: gradesStack},
  Statistics: {screen: statisticsStack},
});

const AuthNavigator = createSwitchNavigator(
  {
    LoadingScreen: {screen: LoadingScreen},
    Login: {screen: Login},
    App: {screen: tabNavigator},
  },
  {
    initialRouteName: 'LoadingScreen',
  },
);

export default createAppContainer(AuthNavigator);

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
const headerColorOptions =  ({navigation}) => ({
  headerStyle: {
    backgroundColor: PRIMARY_COLOR.main,
  },
  headerTintColor: TEXT_COLOR,
});
const gradesStack = createStackNavigator({
  Grades: {screen: Grades, navigationOptions: headerLeftDefaultOptions},
  NewGrade: {screen: NewGrade, navigationOptions: headerColorOptions},
  GradeDetail: {screen: GradeDetail, navigationOptions: headerColorOptions},
});

const statisticsStack = createStackNavigator(
  {
    Statistics: {screen: Statistics},
  },
  {
    defaultNavigationOptions: headerLeftDefaultOptions,
  },
);

const tabNavigator = createBottomTabNavigator(
  {
    Grades: {screen: gradesStack},
    Statistics: {screen: statisticsStack},
  },
  {
    tabBarOptions: {
      showIcon: false,
      activeTintColor: TEXT_COLOR,
      inactiveTintColor: TEXT_COLOR,
      activeBackgroundColor: PRIMARY_COLOR.dark,
      inactiveBackgroundColor: PRIMARY_COLOR.light,
    },
  },
);

const loginStack = createStackNavigator({
  LoginScreen:{screen:Login,navigationOptions: headerColorOptions}
})

const AuthNavigator = createSwitchNavigator(
  {
    LoadingScreen: {screen: loginStack},
    Login: {screen: Login},
    App: {screen: tabNavigator},
  },
  {
    initialRouteName: 'LoadingScreen',
  },
);

export default createAppContainer(AuthNavigator);

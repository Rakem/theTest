import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Screens/Login';
import Statistics from './Screens/Statistics';
import Grades from './Screens/Grades';
import NewGrade from './Screens/CustomGrade';

const gradesStack = createStackNavigator({
  Statistics: {screen: Grades},
  NewGrade: {screen: NewGrade},
});

const tabNavigator = createBottomTabNavigator({
  Grades: {screen: gradesStack},
  Statistics: {screen: Statistics},
});

const AuthNavigator = createSwitchNavigator(
  {
    Login: {screen: Login},
    App: {screen: tabNavigator},
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(AuthNavigator);

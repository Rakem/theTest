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

const headerLeftDefaultOptions = ({navigation}) => ({
  headerLeft: (
    <TouchableOpacity onPress={() =>
      Login.logOut().then(() => navigation.navigate('Login'))
    }>
      <View style={{paddingLeft: 15}}>
        <Text>Logout</Text>
      </View>
    </TouchableOpacity>
  ),
});
const gradesStack = createStackNavigator(
  {
    Statistics: {screen: Grades},
    NewGrade: {screen: NewGrade},
    GradeDetail: {screen: GradeDetail},
  },
  {
    defaultNavigationOptions: headerLeftDefaultOptions,
  },
);

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

import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Colors, { withAlpha } from '../constants/Colors';

const HomeStack = createStackNavigator({
  Home: HomeScreen
});
const HomeIcon = ({ focused }) => (
  <TabBarIcon
    focused={focused}
    name={
      Platform.OS === 'ios'
        ? `ios-information-circle${focused ? '' : '-outline'}`
        : 'md-information-circle'
    }
  />
);
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: HomeIcon
};

const LinksStack = createStackNavigator({
  Links: LinksScreen
});
const LinkIcon = ({ focused }) => (
  <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
  />
);
LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: LinkIcon
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});
const SettingsIcon = ({ focused }) => (
  <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
  />
);
SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: SettingsIcon
};

export default createBottomTabNavigator(
  {
    HomeStack,
    LinksStack,
    SettingsStack
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.white,
      activeBackgroundColor: Colors.primary,
      inactiveTintColor: withAlpha(Colors.white, 0.75),
      inactiveBackgroundColor: Colors.primary
    }
  }
);

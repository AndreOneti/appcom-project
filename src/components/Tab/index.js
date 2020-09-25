import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//* Styles and Icons
import { colors } from '../../styles'
import Icon from 'react-native-vector-icons/FontAwesome';

//* Components
import Home from '../Home';
import Help from '../Help';
import Profile from '../Profile';
import Category from '../Category';

const Tab = createBottomTabNavigator();

const BottomTab = () => {

  const getIconName = (routeName) => {
    if ('home' === routeName) return 'home';
    if ('profile' === routeName) return 'user';
    if ('category' === routeName) return 'list';
    if ('help' === routeName) return 'question';
  };

  return (
    <Tab.Navigator
      initialRouteName='home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName = getIconName(route.name);

          return <Icon name={iconName} size={25} style={{ color: color }} />
        }
      })}
      tabBarOptions={{
        style: {
          backgroundColor: colors.white
        },
        showLabel: false,
        activeTintColor: colors.base,
        inactiveTintColor: colors.light
      }}>

      <Tab.Screen name='home' component={Home} />
      <Tab.Screen name='category' component={Category} />
      <Tab.Screen name='help' component={Help} />
      <Tab.Screen name='profile' component={Profile} />
    </Tab.Navigator>
  )
}

export default BottomTab;

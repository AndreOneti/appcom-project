import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//* Components
import BottomTab from '../components/Tab';
import ProductList from '../components/ProductList';
import ProductDetails from '../components/ProductDetails';

//* Styles
import { colors } from '../styles';

const Stack = createStackNavigator();

const HomeStack = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HomeScreen'
        component={BottomTab}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='ProductDetails'
        component={ProductDetails}
        options={
          {
            title: 'Detalhes',
            headerStyle: {
              backgroundColor: colors.base
            },
            headerTintColor: colors.white
          }
        }
      />
      <Stack.Screen
        name='ProductList'
        component={ProductList}
        options={
          {
            title: 'ProductList',
            headerStyle: {
              backgroundColor: colors.base
            },
            headerTintColor: colors.white
          }
        }
      />
    </Stack.Navigator>
  )
}

export default HomeStack;

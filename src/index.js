import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//* Context
import { CartProvider } from './contexts/cart';

//* Routes
import HomeStack from './routes/routes';

//* Styles
import style from './style'
import { colors } from './styles'

const AppECom = () => {
  return (
    <SafeAreaView style={style.container}>
      <NavigationContainer>
        <StatusBar barStyle='light-content' backgroundColor={colors.base} />
        <CartProvider>
          <HomeStack />
        </CartProvider>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default AppECom;

import React from 'react';
import { ScrollView } from 'react-native';

//* Styles
import style from './style';

//* Components
import ProductList from '../ProductList';
import Header from '../Header';

const Home = ({ navigation }) => {
  return (
    <>
      <Header />
      <ScrollView style={style.container}>
        <ProductList navigation={navigation} />
      </ScrollView>
    </>
  );
}

export default Home;

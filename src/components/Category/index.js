import React from 'react';
import { ScrollView } from 'react-native';

//* Components
import CategoryList from '../CategoryList';

//* Styles
import style from './style';

const Category = ({ navigation }) => {
  return (
    <ScrollView style={style.container}>
      <CategoryList navigation={navigation} />
    </ScrollView>
  );
}

export default Category;

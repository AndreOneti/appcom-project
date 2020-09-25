import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

//* Styles
import style from './style'

const Category = ({ navigation, category }) => {

  const openList = () => {
    navigation.navigate('ProductList', {
      categoryProducts: category.products
    });
  }

  return (
    <View style={style.container}>
      <TouchableOpacity key={category.id} onPress={openList} style={style.button}>
        <Image source={{ uri: category.image }} style={style.image} />
        <View>
          <Text style={style.description}>{category.description}</Text>
          <Text style={style.items}>{category.items} items(s)</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Category;

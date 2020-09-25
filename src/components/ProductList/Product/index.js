import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

//* Styles and Icons
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';

const Product = ({ navigation, product }) => {

  const openDetails = () => {
    navigation.navigate('ProductDetails', {
      product: product
    });
  }

  return (
    <View style={style.container}>
      <TouchableOpacity key={product.id} onPress={openDetails}>
        <Icon name='ios-checkmark-circle-outline' size={24} style={style.checkIcon} />
        <Image source={{ uri: product.image }} style={style.image} />
        <View>
          <Text style={style.description}>{product.description}</Text>
          <Text style={style.price}>{product.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Product;

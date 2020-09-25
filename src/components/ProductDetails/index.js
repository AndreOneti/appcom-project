import React, { useEffect, useState } from 'react';
import { View, Image, Button, Text } from 'react-native';
import { StackActions } from '@react-navigation/native';

//*Styles
import { colors } from '../../styles';
import style from './style';

//* Context
import { useCounter } from '../../contexts/cart';

const ProductDetails = ({ route, navigation }) => {

  const [counter, setCounter] = useCounter();

  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    const { product } = route.params;
    setSelectedProduct(product);
  }, []);

  const addToCart = () => {

    const popAction = StackActions.pop(1);

    setCounter(counter + 1);

    navigation.dispatch(popAction);
  }

  return (
    <View style={style.container}>
      <Image source={{ uri: selectedProduct.image }} style={style.image} />
      <View style={style.containerText}>
        <Text style={style.description}>{selectedProduct.description}</Text>
        <Text style={style.price}>{selectedProduct.price}</Text>
      </View>
      <View style={style.buttonAdd}>
        <Button title='Adicionar' color={colors.base} onPress={addToCart} />
      </View>
    </View>
  )
}

export default ProductDetails;

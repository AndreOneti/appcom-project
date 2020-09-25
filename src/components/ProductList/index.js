import { View } from 'react-native';
import React, { useState, useEffect } from 'react';

//* Component
import Product from './Product';

//* Styles
import style from './style';

const ProductList = ({ route, navigation }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (route && route.params) {
      const { categoryProducts } = route.params;
      if (categoryProducts) setProducts(categoryProducts);
    } else {
      setProducts([
        {
          "id": 1,
          "image": "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
          "description": "Description 1",
          "price": "R$ 10,00"
        },
        {
          "id": 2,
          "image": "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
          "description": "Description 2",
          "price": "R$ 20,00"
        },
        {
          "id": 3,
          "image": "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
          "description": "Description 3",
          "price": "R$ 20,00"
        },
        {
          "id": 4,
          "image": "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
          "description": "Description 4",
          "price": "R$ 20,00"
        }
      ]);
    }
  }, []);

  return (
    <View style={style.container}>
      {
        products.map(product => <Product
          navigation={navigation}
          key={product.id}
          product={product}
        />)
      }
    </View>
  );
}

export default ProductList;

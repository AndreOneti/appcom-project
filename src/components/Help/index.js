import React from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';

//* Components
import Header from '../Header';

//* Styles
import style from './style';

const Help = () => {

  const handleClick = () => {
    alert("Not implemented yet...");
  }

  return (
    <>
      <Header />
      <ScrollView style={style.container}>
        <TouchableOpacity onPress={handleClick}>
          <Text style={[style.item]}>Pedido</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClick}>
          <Text style={[style.item, style.itemMargin]}>Pagamento</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClick}>
          <Text style={[style.item, style.itemMargin]}>Entrega</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClick}>
          <Text style={[style.item, style.itemMargin]}>Contato</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

export default Help;

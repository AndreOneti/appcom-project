import React from 'react';
import { View, TextInput } from 'react-native';

//* Styles and Icons
import style from './style';
import { colors } from '../../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = () => {
  return (
    <View style={style.container}>
      <TextInput
        style={style.inputSearch}
        placeholder='E-Commerce App'
        placeholderTextColor={colors.white}
      />
      <View>
        <Icon name='search' size={20} style={style.icon} />
      </View>
    </View>
  );
}

export default Search

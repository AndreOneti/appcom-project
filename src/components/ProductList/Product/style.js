import { StyleSheet, Dimensions } from 'react-native';
import { colors, measures, fonts } from '../../../styles';

const { width } = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    width: (width - 45) / 2,
    marginBottom: measures.padding
  },
  checkIcon: {
    position: 'absolute',
    color: colors.base,
    right: 0,
    zIndex: 1
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: measures.padding
  },
  description: {
    fontSize: fonts.regular,
    color: colors.light
  },
  price: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: '#6959CD'
  }
});

export default style;

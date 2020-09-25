import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts, measures } from '../../styles';

const { width } = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'contain'
  },
  containerText: {
    padding: measures.padding
  },
  description: {
    fontSize: fonts.big,
    fontWeight: 'bold',
    color: colors.light
  },
  price: {
    fontSize: fonts.big,
    fontWeight: 'bold',
    color: '#6959CD'
  },
  buttonAdd: {
    width: width / 2
  }
});

export default style;

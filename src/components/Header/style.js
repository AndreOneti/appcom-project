import { StyleSheet } from 'react-native';
import { measures, colors, fonts } from '../../styles';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.base,
    height: measures.headerHeight,
    justifyContent: 'space-between',
    paddingTop: measures.headerPadding,
    paddingHorizontal: measures.padding,
  },
  baseStyle: {
    fontSize: fonts.big,
    color: colors.white
  },
  cartContainer: {
    flexDirection: 'row',
    padding: measures.padding
  },
  text: {
    top: 2,
    right: 0,
    position: 'absolute',
    fontSize: fonts.small
  }
});

export default style;

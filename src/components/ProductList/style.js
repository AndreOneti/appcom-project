import { StyleSheet } from 'react-native';
import { colors, measures } from '../../styles';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: measures.padding,
    justifyContent: 'space-between',
    backgroundColor: colors.white
  }
});

export default style;

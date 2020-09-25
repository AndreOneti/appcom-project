import { StyleSheet } from 'react-native';
import { colors, measures, fonts } from '../../styles';


const style = StyleSheet.create({
  container: {
    padding: measures.padding,
    backgroundColor: colors.white
  },
  item: {
    borderBottomColor: colors.dark,
    marginTop: measures.margin,
    padding: measures.padding,
    fontSize: fonts.bigger,
    borderBottomWidth: 1,
    color: colors.base,
    fontWeight: "bold",
  },
  itemMargin: {
    marginTop: 20,
  }
});

export default style;

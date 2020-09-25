import { StyleSheet } from 'react-native';
import { colors, measures, fonts } from '../../styles';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white
  },
  image: {
    width: 125,
    height: 125,
    marginTop: 75,
    borderRadius: 125 / 2,
  },
  textContainer: {
    marginTop: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 23,
    marginTop: 7,
    color: colors.black,
  },
  btnContainer: {
    marginTop: 45,
    alignItems: 'center'
  },
  btn: {
    margin: 7,
    width: 140,
    height: 40,
    alignItems: 'center',
    borderRadius: 140 / 2,
    justifyContent: 'center',
    backgroundColor: colors.base,
  },
  btnText: {
    color: colors.white,
    fontSize: fonts.big,
  },
  btnLogout: {
    margin: 7,
    width: 140,
    height: 40,
    alignItems: 'center',
    borderRadius: 140 / 2,
    justifyContent: 'center',
    backgroundColor: '#d63131',
  }
});

export default style;

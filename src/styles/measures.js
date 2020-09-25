import { Platform } from 'react-native';

export default {
  margin: 5,
  padding: 15,
  highTabBar: 50,
  highSearchBar: 50,
  ...Platform.select({
    android: {
      headerHeight: 44, headerPadding: 0
    },
    ios: {
      headerHeight: 64, headerPadding: 20
    }
  })
}

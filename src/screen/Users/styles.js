import {StyleSheet} from 'react-native';
import Colors from '../../constants/Color';

export const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
  text: {
    fontSize: 17,
    color: Colors.black,
  },
  listComponent: {
    justifyContent: 'center',
    flex: 1,
    borderWidth: 1,
  },
  inside: {
    margin: 5,
  },
});

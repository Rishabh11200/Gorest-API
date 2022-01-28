import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Color';

export const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  error: {
    fontSize: 15,
    textAlign: 'justify',
    fontWeight: '700',
    color: Colors.red,
  },
  container: {
    flexDirection: 'row',
    elevation: 10,
    padding: 10,
    margin: 20,
    borderRadius: 90,
    backgroundColor: Colors.white,
    shadowColor: Colors.shadeBlue,
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  icon: {
    marginHorizontal: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    color: Colors.black,
  },
  insideTextInput: {
    flex: 1,
    color: Colors.black,
  },
});

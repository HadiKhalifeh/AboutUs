import {Dimensions, Platform} from 'react-native';
import color from '../Color/Color';

const {height, width} = Dimensions.get('window');

const styles = {
  mainContainer: {
    width: width,
    height: 40,

    flexDirection: 'row',

    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: color.header,
  },
  headerContainer: {
    width: width,
    zIndex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftHeaderContainer: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
};
export default styles;

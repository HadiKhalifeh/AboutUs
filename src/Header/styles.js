import {Dimensions, Platform} from 'react-native';
import color from '../Color/Color';

const {height, width} = Dimensions.get('window');

const styles = {
  mainContainer: {
    width: width,
    height:40,
  //  height:
   //   Platform.OS === 'ios' ? tabHeight + statusBarHeight - 12 : tabHeight,
  //  paddingTop: Platform.OS === 'ios' ? statusBarHeight - 10 : 0,
    flexDirection: 'row',
    
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: color.header,
  },
  headerContainer: {
    width: width,
    zIndex: 3,
    flexDirection: 'row',
    alignItems: 'center',
   // paddingBottom: 5,
  },
  leftHeaderContainer: {
  //  marginTop: isIphoneX() ? 15 : 0,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'
  },
}
export default styles;

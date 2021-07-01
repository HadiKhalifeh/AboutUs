import React, {Component} from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native';
import styles from './styles';


export default class Header extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.leftHeaderContainer}>
              <TouchableOpacity style={ {
        height: 50,
        justifyContent: 'center',
        padding:7,
        paddingBottom:5
    
    }}>
          <Image style={{width:15,height:15,}} source={require('../Assets/back-button.png')}/>
          </TouchableOpacity>
               <Text style={{width:50,marginRight:100,fontWeight:'900'}}>About</Text></View>
         
         
          
        </View>

       
      </View>
    );
  }
}

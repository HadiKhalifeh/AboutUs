import React from 'react';

import Header from '../Header/index';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import color from '../Color/Color.js';
import styles from './styles';

export default class AboutUsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <View style={styles.main}>
          <View style={styles.card}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  alignItems: 'flex-start',
                  marginTop: 5,
                  marginLeft: 30,
                }}>
                <View style={styles.row}>
                  <Text style={styles.title}>Version</Text>
                  <Text style={styles.description}>Version 5.0.0</Text>
                  <View style={styles.line}></View>
                </View>
                <View style={{marginTop: 5}}>
                  <Text style={styles.title}>Rate us</Text>
                  <Text style={styles.description}>
                    Do you Like using BarCloud Pro?
                  </Text>
                  <TouchableOpacity
                    style={{
                      borderColor: color.buttonborder,
                      borderRadius: 30,
                      borderWidth: 1,
                      alignItems: 'center',
                      backgroundColor: color.button,
                      height: 42,
                      width: 160,
                      justifyContent: 'center',
                      marginTop: 10,
                    }}>
                    <Text style={{color: '#90ee90'}}>Rate us</Text>
                  </TouchableOpacity>
                  <View style={styles.line}></View>
                </View>
                <View style={styles.row}>
                  <Text style={styles.title}>Account</Text>
                  <Text style={styles.description}>
                    Asap123@asapsystems.com
                  </Text>
                  <View style={styles.line}></View>
                </View>
                <View style={styles.row}>
                  <Text style={styles.title}>Database Name</Text>
                  <Text style={styles.description}>BarCloudWeb_123123142</Text>

                  <View style={styles.line}></View>
                </View>
                <View style={styles.row}>
                  <Text style={styles.title}>Device ID</Text>
                  <Text style={styles.description}>8723648fdsfds234</Text>
                  <View style={styles.line}></View>
                </View>
                <View style={styles.row}>
                  <Text style={styles.title}>Device name</Text>
                  <TextInput
                    placeholder={'Choose you Device name'}
                    style={{
                      borderRadius: 15,
                      backgroundColor: 'white',
                      width: 250,
                      height: 40,
                    }}
                  />
                  <View style={styles.line}></View>
                </View>
                <View>
                  <Text style={styles.title}>Contact us</Text>
                  <Text style={styles.description}>
                    355,Piercy Rd,San Jose,CA 95138
                  </Text>
                  <TouchableOpacity
                    style={{
                      borderColor: color.buttonborder,
                      borderRadius: 30,
                      borderWidth: 1,
                      alignItems: 'center',
                      backgroundColor: color.button,
                      height: 30,
                      width: 250,

                      justifyContent: 'center',
                      marginTop: 10,
                    }}>
                    <Text style={{color: '#90ee90'}}>
                      Find us on Google Map
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.line}></View>
                </View>
                <Text
                  style={{fontStyle: 'italic', fontSize: 8, color: '#0006'}}>
                  ASAP Systems 2021{' \u00A9 '}All right reserved
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

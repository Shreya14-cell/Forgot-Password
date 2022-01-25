import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Button, Props, Dimensions, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import profile from '../assets/image5.jpg'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.bigCircle}></View>
          <View style={styles.smallCircle}></View>
          <View style={styles.centerizedView}>
            <View style={styles.authBox}>
              <View style={styles.logoBox}>
            
        <Image source={profile} style={{
          width: 60,
          height: 60,
          borderRadius: 10,
          marginTop: 8
        }}></Image>
              </View>
              <Text style={styles.loginTitleText}>Forgot Password?</Text>
              <Text>Enter your Email address we'll send you a link to reset your password</Text>

              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Email</Text>

                <TextInput
                  style={styles.input}
                  autoCapitalize="characters"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  placeholder="example@gmail.com"
                />
              </View>

              <TouchableOpacity style={styles.loginbutton}>
                <Text style={styles.loginButtonText}>Send Email</Text>
              </TouchableOpacity>
            
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    position:'relative',
  },
  bigCircle:{
    width:Dimensions.get('window').height*0.7,
    height:Dimensions.get('window').height*0.7,
    backgroundColor: '#282534',
    borderRadius: 1250,
    position: 'absolute',
    right: Dimensions.get('window').width*0.25,
    top: -50,
  },
  smallCircle:{
    width:Dimensions.get('window').height*0.4,
    height:Dimensions.get('window').height*0.4,
    backgroundColor: '#282534',
    borderRadius: 1000,
    position: 'absolute',
    bottom: Dimensions.get('window').width*-0.2,
    right: Dimensions.get('window').width*-0.3,
  },
  centerizedView:{
    width:'100%',
    top:'15%',
  },

  authBox:{
    width: '90%',
    backgroundColor:'#fafafa',
    borderRadius: 20,
    alignSelf:'center',
    paddingHorizontal:14,
    paddingBottom:30,
    shadowColor:'#fff',
    shadowOffset:{
        width:0,
        height:2,
    },
    shadowOpacity:0.25,
    shadowRadius:3.84,
    elevation:5,
      
  },
  logoBox:{
      width: 100,
      height:110,
      backgroundColor:'#fff',
      borderRadius:1000,
      alignSelf:'center',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      top:-50,
      marginBottom:-50,
      shadowColor:'#000',
      shadowOffset:{
          width:0,
          height:1,
      },
      shadowOpacity:0.2,
      shadowRadius:1.41,
      elevation:2,
  },
  troubleLoginTitle:{
      fontSize:22,
      fontWeight:'bold',
      paddingHorizontal:55,
      alignItems:'center',
      justifyContent:'center',
  },
  forgotMail:{
      fontSize:17,
      alignItems:'center',
      justifyContent:'center',
  },
  inputBox:{
      marginTop:10,
  },
  InputIcon:{
      paddingHorizontal:8,
  },
  inputLabel:{
      fontSize:18,
      marginBottom:6,
      paddingTop:20,
  },
  Input:{
      width:'100%',
      height:40,
      backgroundColor:'#dfe4ea',
      borderRadius:4,
      paddingHorizontal:10,
      borderColor:'black',
  },
  loginbutton:{
      backgroundColor:'#282534',
      marginTop:10,
      paddingVertical:10,
      borderRadius:20,
  },
  loginButtonText:{
      color:'#fff',
      textAlign:'center',
      fontSize:20,
      fontWeight:'bold',

  },
  registerText:{
      textAlign:'center',
      marginTop:20,
      fontSize:16,
      color:'#080808',
  },
  newRegisterText:{
      color:'#0761f2',
  },
  forgotPasswordText:{
      textAlign:'center',
      marginTop:12,
      fontSize:15,
      color:'#0761f2',
  },
  loginTitleText:{
      alignItems:'center',
      justifyContent:'center',
      fontWeight:'bold',
      textAlign:'center',
  }


});    
import React,{Component} from 'react';

import { Image,Text, View, TouchableOpacity,StyleSheet}from 'react-native';

export default class  Welcomes extends Component{
     render(){
        return(          
          <View style={styles.MainContainer}>
              <Image source={require("./image2.jpg")}/>
               <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity = { .5 }
                  onPress={()=>this.props.navigation.navigate('Reg')}>
         
                    <Text style={styles.TextStyle}> Signup </Text>
                    
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity = { .5 }
                  onPress={ ()=>this.props.navigation.navigate('Login') }
               >
         
                    <Text style={styles.TextStyle}> Signin </Text>
                    
              </TouchableOpacity>
                       </View>
                       
            );
          }
        }
         
        const styles = StyleSheet.create({
         
          MainContainer: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#F5FCFF',
          },
         
          SubmitButtonStyle: {
         
            marginTop:20,
            paddingTop:15,
            paddingBottom:15,
            marginLeft:30,
            marginRight:30,
            backgroundColor:'#00BCD4',
            borderRadius:10,
            borderWidth: 1,
            borderColor: '#fff'
          },
         
          TextStyle:{
              color:'#fff',
              textAlign:'center',
          }
         
        });
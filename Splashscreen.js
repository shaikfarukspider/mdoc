import React from "react";
import { Text, StyleSheet,TouchableOpacity, View,Image } from "react-native";
import Swiper from "react-native-web-swiper";


export default class  Splashscreen extends React.Component {
    
componentDidMount(){
 
setTimeout(() => {
   this.props.navigation.navigate("Welcomes");
}, 7000);
}

 render() {
        return (

    <View style={{flex:1}}>
              <View style={{flex:1}}>
                  <Swiper
                    from={0}
                    timeout={2.5}
                    minDistanceForAction={0.1}
                    controlsProps={{
                      dotsTouchable: true,
                      prevPos: 'left',
                      nextPos: 'right',
                      nextTitle: '',
                      nextTitleStyle: { color: 'red', fontSize: 24, fontWeight: '500' },
                      PrevComponent: ({ onPress }) => (
                        <TouchableOpacity onPress={onPress}>
                          <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
                            {''}
                          </Text>
                        </TouchableOpacity>
                      ),
                    }}
                  >
<View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
                           <Image source={require("./icons/team_anim.gif")} />
                         <Text>Welcome to ManaDoctor.in</Text>
                     </View>
                        <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
                         
                      <Image source={require("./icons/doctor.jpg")}/>
                      <Text> get Your oppointment in online 24/7</Text>
                     </View>
                       <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
                   <Image source={require("./icons/image.png")}/>
               
                   </View>
                  </Swiper>
              </View>
</View>

        )
                  }
                }
                
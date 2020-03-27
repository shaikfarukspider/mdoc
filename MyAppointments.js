import React,{Component} from 'react';  
import { View, Text, Button,Image,TouchableOpacity } from 'react-native';  
  
export default class UserHome extends Component {  
    render() {  
        return (     <View>
            {/* <View style={{backgroundColor:'#154360',flexDirection:'row',alignItems: 'center', justifyContent:"space-between",padding:10}}>                       */}
            <View style={{backgroundColor:'#154360'}}>
            <TouchableOpacity title="Toggle drawer" onPress={() => this.props.navigation.openDrawer()}> 
           
            <Image source={require("./icons/bar.png")} style={{width: 40, height: 40}}/>
           </TouchableOpacity>
           </View> 
        <Image source={require("./icons/no.jpg")} style={{width:"100%", height:"80%"}}/>
                <Text style={{ flexDirection:'column',alignItems:'center',justifyContent:'center',fontSize:20,color:'#4a235a'}}>  You  don't have Appointments </Text>
           </View>
        );  
    }  
}  
// import React from "react";
// import { View, Text } from "react-native";
// import MyHeader from "./Home";

// const MyAppointments = props => {
//   return (
//     <View>
//       <MyHeader navigation={props.navigation} title="" />
//       <Text>This is Home Screen</Text>
//     </View>
//   );
// };

// export default MyAppointments;
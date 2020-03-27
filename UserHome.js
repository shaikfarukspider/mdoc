import React, {Component} from 'react';
import {TextInput ,StyleSheet, Text, View, TouchableHighlight, Button,TouchableOpacity, Image} from 'react-native';
import { ListItem, SearchBar } from "react-native-elements";
 import {DrawerActions} from 'react-native-drawer';
 import Search from './Search';
export default class UserHome extends Component {
    static navigationOptions = ({ screenProps }) => ({
            headerLeft: (
                <TouchableOpacity title="Toggle drawer" onPress={() => screenProps.openDraw() }> 
                    <Image source={require("./icons/bar.png")} style={{width: 40, height: 40}}/>
                       </TouchableOpacity>
            ),
    })
    render() {
        return (
            <View>
              <View style={{marginTop:10, padding:10}}>
             {/* <TextInput
      maxLength={40}  placeholder="sreach by name" style={{color:'red', borderWidth:1}}  /> */}
    <Search/>


    </View>
                <View style={{paddingTop: 20,  }}>
                 <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Finddoctor')} }>

             <Image source={require("./icons/Doctor.jpg")} style={{ height:110, width:100}}/>
            <Text style={{color:"#4a235a", fontSize:15}}>Meet your doctor </Text>
           <Text style={{color:"#4a235a"}}>book Appointment</Text></TouchableOpacity>
      
    <Text> { this.props.name}</Text>
             </View>
            </View>
        );
    }
} 

































// import React ,{Component} from 'react'; 
//  import Stacknavigation from './Stacknavigator';
// import { TextInput,View, Text, Button,TouchableOpacity, Image  } from 'react-native';  
//   class Home extends Component { 
//     constructor(props){
//         super(props);
//    }
 
//     render() {  
//         return (  
      
//             <View>
//     <View style={{backgroundColor:'#154360',flexDirection:'row',alignItems: 'center', justifyContent:"space-between",padding:10}}>                      
//  <TouchableOpacity title="Toggle drawer" onPress={() => this.props.navigation.openDrawer()}> 
//  <Image source={require("./icons/bar.png")} style={{width: 40, height: 40}}/>
// </TouchableOpacity>

//             </View>  
//             <View style={{marginTop:10, padding:10}}>
//             <TextInput
//       maxLength={40}  placeholder="sreach by name" style={{color:'red', borderWidth:1}}  />
//     </View>
//             <View style={{paddingTop: 20,  }}>
//                 <TouchableOpacity onPress={()=>{this.props.navigation.navigate('List')} }>

//             <Image source={require("./icons/Doctor.jpg")} style={{ height:110, width:100}}/>
//             <Text style={{color:"#4a235a", fontSize:15}}>Meet your doctor </Text>
//             <Text style={{color:"#4a235a"}}>book Appointment</Text></TouchableOpacity>
//             </View>
//             <View></View>
//            </View>
        
//         ); 
       
//     }  

// }  

// export  default class UserHome extends Component{
//     render(){
//          return(
//             <Stacknavigation/>
//          )
//     }
// }


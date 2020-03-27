import React,{Component} from 'react';
import {View,TextInput,Button,TouchableOpacity, Image,Text} from 'react-native';
import { ListItem, SearchBar } from "react-native-elements";
import Search from './Search';
 export default class List extends Component{
     render(){
          return(
              <View>



         <View> 
         {/* <TextInput
      maxLength={40}  placeholder="sreach by name" style={{color:'red', borderWidth:1}}  /> */}
      <SearchBar placeholder="Search Here..."
          lightTheme round editable={true} />


    </View>
    <View style={{paddingTop:20, flexDirection:'row', justifyContent: "space-between" }}>
<TouchableOpacity onPress={()=>{this.props.navigation.navigate('Appoint')} }>
<Image source={require("./icons/baby.jpg")} style={{ height:110, width:100, }}/>
<Text> Chlid specialist</Text>
           </TouchableOpacity>
<TouchableOpacity onPress={()=>{this.props.navigation.navigate('Appoint')} }>

<Image source={require("./icons/Doctor.jpg")} style={{ height:110, width:100}}/>
<Text> Chlid specialist</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>{this.props.navigation.navigate('Appoint')} }>

<Image source={require("./icons/Doctor.jpg")} style={{ height:110, width:100}}/>
<Text> Chlid specialist</Text>
</TouchableOpacity>
</View>


<View style={{paddingTop:20, flexDirection:'row',justifyContent: "space-between" }}>
<TouchableOpacity onPress={()=>{this.props.navigation.navigate('Appoint')} }>
<Image source={require("./icons/Doctor.jpg")} style={{ height:110, width:100, marginRight:10}}/>
<Text> Chlid specialist</Text>
           </TouchableOpacity>
          
  
<TouchableOpacity onPress={()=>{this.props.navigation.navigate('Appoint')} }>

<Image source={require("./icons/Doctor.jpg")} style={{ height:110, width:100}}/>
<Text> Chlid specialist</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{this.props.navigation.navigate('Appoint')} }>
<Image source={require("./icons/Doctor.jpg")} style={{ height:110, width:100}}/>
<Text> Chlid specialist</Text>
</TouchableOpacity>

</View>

<View style={{paddingTop:20, flexDirection:'row',justifyContent: "space-between" }}>
<TouchableOpacity onPress={()=>{this.props.navigation.navigate('Appoint')} }>
<Image source={require("./icons/Doctor.jpg")} style={{ height:110, width:100, marginRight:10}}/>
<Text> Chlid specialist</Text>
           </TouchableOpacity>
          
  
<TouchableOpacity onPress={()=>{this.props.navigation.navigate('Appoint')} }>

<Image source={require("./icons/Doctor.jpg")} style={{ height:110, width:100}}/>
<Text> Chlid specialist</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{this.props.navigation.navigate('Appoint')} }>
<Image source={require("./icons/Doctor.jpg")} style={{ height:110, width:100}}/>
<Text> Chlid specialist</Text>
</TouchableOpacity>
</View>
<View style={{paddingTop:20, flexDirection:'row',justifyContent: "space-between" }}>
<TouchableOpacity onPress={()=>{this.props.navigation.navigate('Appoint')} }>
<Image source={require("./icons/Doctor.jpg")} style={{ height:110, width:100, marginRight:10}}/>
<Text> Chlid specialist</Text>
           </TouchableOpacity>
          
  
<TouchableOpacity onPress={()=>{this.props.navigation.navigate('Appoint')} }>

<Image source={require("./icons/Doctor.jpg")} style={{ height:110, width:100}}/>
<Text> Chlid specialist</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{this.props.navigation.navigate('Appoint')} }>
<Image source={require("./icons/Doctor.jpg")} style={{ height:110, width:100}}/>
<Text> Chlid specialist</Text>
</TouchableOpacity>
</View>
</View>


        
          )
     }
    }
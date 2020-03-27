import React,{Component} from 'react';  
import { View, Text, Button,Image,TouchableOpacity } from 'react-native';   
  
export default class UserHome extends Component {  
    render() {  
        return (  
            <View>
   
             <View style={{backgroundColor:'#154360'}}>  
 <TouchableOpacity title="Toggle drawer" onPress={() => this.props.navigation.openDrawer()}> 
 <Image source={require("./icons/bar.png")} style={{width: 40, height: 40}}/><Text></Text>
</TouchableOpacity>
</View>
<View style={ {marginTop:"75%",flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
<Image source={require("./icons/bell.png")} style={{width:80, height:80}}/>
                <Text style={{ flexDirection:'column',alignItems:'center',justifyContent:'center',fontSize:20,color:'#4a235a'}}>  No Notifications</Text>
</View>
</View>
        );  
    }  
}  

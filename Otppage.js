import  React,{Component} from 'react';
import {Text, View, TextInput, Button, StyleSheet,TouchableOpacity} from 'react-native'; 
 import { Actions} from 'react-native-router-flux';
  export default class NextPage extends Component{
 constructor(props){
         super(props)
         this.state={
            Type:"User",
                 name:" ",
                  data: " "
         }


        }


 validate_field=()=>{
         const { name}=this.state 
        
         if(name==" "){
        alert(" invalid otps")
         return false
         }
         return true
  }
  
   send=()=>{
 alert(" your otp sent successfully")
   }

  making_api_call=()=>{    
     if(this.validate_field()){
    fetch("https://offers.spiderfever.com/api/verify_otp",{
   method:'POST',
   headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
   },
   body:JSON.stringify({
       insertedId:this.props.id,
       otp:this.state.name,
   }),
}).then((response) => response.json())
.then((responseJson) => {
  if(responseJson.success == 0) {
    alert(responseJson.message);      
    } else {
      alert(responseJson.message)
    this.props.navigation.navigate("Home")
    }
}).catch((error) => {
console.error(error);
});
  }
}


nextOtp(){
  Actions.Resendotp()
}

 render(){
      return(
<View style={styles.container}>
<View>
<TextInput  style={styles.textbox} placeholder="Enter otp "  onChangeText={(value)=>this.setState({name:value})}/>
</View>
<TouchableOpacity onPress = {() => {this.making_api_call()}}>
    <View style = {{backgroundColor: 'white', alignItems: 'center', 
                    justifyContent: 'center', borderRadius: 15,width:300 , height:40}} >
        <Text style = {{color: '#00BCD4',fontWeight: 'bold',fontSize:18,}}>Verify</Text>
      
    </View>

</TouchableOpacity>
 <TouchableOpacity onPress = {() =>{ {this.props.navigation.navigate("Resendotp",{id_1:this.props.id})} {this.send()}}} >
    <View>
        <Text style = {{padding:10,color: 'green',fontWeight: 'bold',fontSize:18,}}>re-sendotp</Text>
      
    </View>
</TouchableOpacity> 


</View>


      )
 }
  }
const styles=StyleSheet.create({
container:{
 flex: 1,
                 
// Set content's vertical alignment.
 justifyContent: 'center',
                 
  // Set content's horizontal alignment.
alignItems: 'center',
  // Set hex color code here.
backgroundColor: '#00BCD4',                
},
textbox:{
        width: 300,
   height: 44,
   padding: 10,
   marginBottom: 10,
   backgroundColor: 'white',
   borderRadius:10,

   textAlign: 'center', // <-- the magic
   fontWeight: 'bold',
    fontSize:15,
        
        
}, text:{marginTop:10,
         color:'white',
          fontSize:30,
},
     
})






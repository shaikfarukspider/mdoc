import  React,{Component} from 'react';
import {Text, View, TextInput, Button, StyleSheet,TouchableOpacity, AsyncStorage} from 'react-native'; 
import { Actions} from 'react-native-router-flux';
   import Forget  from './Forget';
  export default class Login extends Component{
 constructor(props){
         super(props)
         this.state={
                 mobile:"",
                 password:"",
              
              
                 
                  
                 
         }
 }
       validate_field=()=>{
         const { mobile, password}=this.state 
        
         if(mobile=="  "){
                alert("please enter email")
                return false
        }else if(password=="  "){
                alert("please enter password")
                return false
         }
         return true
 }
SendCred=async()=>{
        if( this.validate_field()){
fetch("https://manadoctor.spiderfever.com/api/login",{
        method:"POST",
         headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json',
         },
         body:JSON.stringify({
                 mobile:this.state.mobile,
                 password:this.state.password

         })

}).then((response)=>response.json())
.then( async(responseJson)=>{
       if(responseJson.success==1){
        alert(" Login Succesfully")
console.log(responseJson.data.data.id)
       this.state.id=responseJson.data.data.id
           this.props.navigation.navigate('Home' ,{token:this.state.id})
        
} else{
  alert(responseJson.message)
                
          }
              
}).catch(error=>{
        console.log(error)})

        }
}
signup(){
        Actions.pop()
             }

             forget(){
                     Actions.Forget()
             }
               
 render(){
      return(
<View style={styles.container}>
<Text style={styles.text}> Signin</Text>

<View>

<TextInput style={styles.textbox} placeholder="Enter your MobileNumber" onChangeText={(value)=>this.setState({mobile:value})}/>
<TextInput style={styles.textbox} placeholder="Enter your Password" secureTextEntry={true}  onChangeText={(value)=>this.setState({password:value})}/>
</View>
<TouchableOpacity onPress = {() =>{this.SendCred()}}>
    <View style = {{backgroundColor: 'white', alignItems: 'center', 
                    justifyContent: 'center', borderRadius: 15,width:300 , height:40}} >
        <Text style = {{color: '#00BCD4',fontWeight: 'bold',fontSize:18,}}>signin</Text>
    </View>
</TouchableOpacity>

<Text style={{padding:10,fontSize:15,color:'white'}}>create  a new  account?</Text>
<TouchableOpacity onPress ={this.signup}>
  <Text style={{fontSize:15,color:'white'}}>signup</Text>
</TouchableOpacity>

<TouchableOpacity onPress ={this.forget}>
  <Text style={{fontSize:15,color:'white'}}>Forgot password?</Text>
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




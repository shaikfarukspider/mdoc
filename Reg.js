import  React,{Component} from 'react';
import {Text, View, TextInput, Alert,Button, StyleSheet,TouchableOpacity} from 'react-native'; 
 import { Actions} from 'react-native-router-flux';
  export default class Reg extends Component{
 constructor(props){
         super(props)
         this.state={
                 name:" ",
                 number:" ",
                 email:"",
                 password:"",
                 c_password:"",
         }
     
      
        //  {global.name=this.state.urname }
        //  {global.email=this.state.uremail }
        //  {global.number=this.state.urmobile}





 }

 validate_field=()=>{
         const { name,mobile, email, password,c_password}=this.state 
        
         if(name==" "){
        alert("please enter name")
         return false
         }else if(mobile==" "){
                alert("please enter number")
                return false
        }else if(email==""){
                alert("please enter email")
                return false
        }else if(password==""){
                alert("please enter password")
                return false
        }else if(c_password==""){
                alert("please enter retypepassword")
                return false
         }
         return true
 }


making_api_call=()=>{
            if(this.validate_field()){
             fetch("https://manadoctor.spiderfever.com/api/register",{
            method:'POST',
            headers:{
               'Accept': 'application/json',
               'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                name:this.state.name,
                 mobile:this.state.mobile,
                 email:this.state.email,
                 password:this.state.password,
                 c_password:this.state.c_password
           
            }),

        }).then((response) => response.json())
        .then((responseJson) => {
         console.log(responseJson)

       if(responseJson.success == 0) {
        alert(responseJson.message)  

      } else if(responseJson.success==1) {
               console.log(responseJson)
        // this.state.urname=responseJson.data.data.name,
        // this.state.uremail=responseJson.data.data.email,
        // this.state.urnumber=responseJson.data.data.mobile,
       console.log(responseJson.insertedId)
        this.state.data=responseJson.insertedId
        alert(responseJson.message + " otp send successfully"); 
       this.props.navigation.navigate("NextPage",{id:this.state.data})
      

      }



      }).catch((error) => {
        console.error(error);
      });
}
}

      signin(){
 Actions.Login()
      }
     

 render(){
      return(
<View style={styles.container}>
<Text style={styles.text}> Signup</Text>

<View>
<TextInput  style={styles.textbox} placeholder="Enter your Name"  onChangeText={(value)=>this.setState({name:value})} />
<TextInput style={styles.textbox}placeholder="Enter your MobileNumber" onChangeText={(value)=>this.setState({mobile:value})} />
<TextInput style={styles.textbox} placeholder="Enter your EmailId" onChangeText={(value)=>this.setState({email:value})}  keyboardType="email-address" />
<TextInput style={styles.textbox} placeholder="Enter your Password" secureTextEntry={true}  onChangeText={(value)=>this.setState({password:value})}     />
<TextInput style={styles.textbox} placeholder="Enter your ReType Password" secureTextEntry={true} onChangeText={(value)=>this.setState({c_password:value})} />
</View>
<TouchableOpacity onPress = {() =>{{this.making_api_call()}}}>
    <View style = {{backgroundColor: 'white', alignItems: 'center', 
                    justifyContent: 'center', borderRadius: 15,width:300 , height:40}}>
        <Text style = {{color: '#00BCD4',fontWeight: 'bold',fontSize:18,}}>continue</Text>
    </View>
</TouchableOpacity>
 <Text style={{padding:10,fontSize:15,color:'white'}}>Already have a account?</Text>
<TouchableOpacity onPress ={this.signin}>
  <Text style={{fontSize:15,color:'white'}}>signin</Text>
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





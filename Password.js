import React,{Component} from 'react';
import {View,TextInput,Button,TouchableOpacity, Image,Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Avatar } from 'react-native-elements';
 import {TimePicker} from 'react-native-simple-time-picker';
 export default class List extends Component{
         constructor(props){
               super(props);
               this.  state={
                      time: null,
                       ptname: null,
                        fee: null,    
                }
               }

     render(){
      
          return(
     <View style={{marginTop:10,alignContent:'center',justifyContent:'center',alignItems:'center'}}>
<Avatar
  rounded
  source={{
    uri:
    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  }}  style={{ height:115 ,width:100}}/>




  
   {/* <Text style={{fontSize:19}}> Dr. ms corona</Text>
  <DatePicker
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2020"
          maxDate="01-01-2021"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={(date) => {this.setState({date: date})}}
        /> */}







<View style={{paddingTop:20, flexDirection:'row', justifyContent: "space-between" }}>
<TouchableOpacity onPress={()=>{this.props.navigation.navigate('Conform')} }>
<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
<Text> Slot1</Text>
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
{/* <View style={{ alignContent:'center' , justifyContent:'center',alignItems:'center'}}> 
  <Text style={{  fontSize:20}}> change Password</Text>
<TextInput  style={ styles.input}  placeholder="Enter old password"  onChangeText={(value)=>this.setState({oldpassword:value})} /> 
<TextInput  style={ styles.input}   placeholder="Enter new password" onChangeText={(value)=>this.setState({newpassword:value})} /> 
<TextInput  style={ styles.input} placeholder="Enter confrom password" onChangeText={(value)=>this.setState({conformpassword:value})} />
<TouchableOpacity onPress={this.change}>
<View style = {{backgroundColor: '#154360', alignItems: 'center', 
                    justifyContent: 'center', borderRadius: 15,width:300 , height:40,borderWidth:1}}>
        <Text style = {{color: 'white',fontWeight: 'bold',fontSize:18,}}>Update</Text>
    </View>
  </TouchableOpacity>


  </View> */}




<View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
     <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Conform')}}>
       <Text style={{width: 50, height: 50, backgroundColor: 'powderblue'}}> slot1</Text>
          </TouchableOpacity>
       
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Conform')}}>
       <Text style={{width: 50, height: 50, backgroundColor: 'powderblue'}}> slot1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Conform')}}>
       <Text style={{width: 50, height: 50, backgroundColor: 'powderblue'}}> slot1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Conform')}}>
       <Text style={{width: 50, height: 50, backgroundColor: 'powderblue'}}> slot1</Text>
          </TouchableOpacity>

         
</View>
</View>

          )
     }
        
 }
 //        validating_password(){
 //            const{oldpassword,newpassword,conformpassword}=this.state
 //             if(oldpassword==!''){
 //                alert('enter old password')
 //                 return false
 //             } else if(newpassword==''){
 //                alert('enter new password')
 //                return false
 //             } else if(conformpassword==''){
 //                alert("enter confrom password")
 //                return false
 //             }
 //              return true
 //        }
 //      // changing password
 //       change=()=>{
 //       if(this.validating_password()){
 //        fetch("https://offers.spiderfever.com/api/m_change_password",{
 //           method:'POST',
 //         headers:{
 //          'Accept':'application/json',
 //          'Content-Type':'application/json',
 //  },
 //           body:JSON.stringify({
 //            merchant_id:global.id,
 //          old_password: this.state.oldpassword,
 //          new_password: this.state.newpassword,
 //          conform_password: this.state.conformpassword,
 
 
 //           })
 //         }).then((response)=>response.json())
 //         .then((responseJson)=>{
 //            alert(responseJson.message)
 //             console.log(responseJson)
 //                   }).catch(error=>{
 //                 console.log(error)})
         
 //                 }
 //               }
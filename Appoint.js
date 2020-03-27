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
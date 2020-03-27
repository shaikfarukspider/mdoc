 import {View,Text} from 'react-native';
import React, {Component} from 'react';
import DrawerNavigator from './DrawerNavigator';

export default class  Home extends Component {

state={
   data:''
 }


   render(){
  {this.setState.data=this.props.token}
 return (
  <View>
    
{
this.state.data=!"" ?this.props.navigation.navigate('DrawerNavigator',{urname:this.props.token}):this.props.navigation.navigate('Login')


   }
   </View>
 )


  }

}


























// import  React,{Component} from 'react';
// import { View, Text, Button,TouchableOpacity,Image} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import {
//   createDrawerNavigator,
// } from '@react-navigation/drawer';

//  import UserHome from './UserHome';
//  import MyAppointments from './MyAppointments';
//  import Noifications from './Notifications';
//  import Profile from './Profile';
//  import Logout from './Logout';
//  const Drawer=createDrawerNavigator();
// function MyDrawer() {

//   return ( <NavigationContainer>
//            <Drawer.Navigator initialRouteName="UserHome">
//             <Drawer.Screen name="UserHome" component={UserHome} />
//           <Drawer.Screen name="Profile" component={Profile} />
//           <Drawer.Screen name="MyAppointments" component={MyAppointments} />
//           <Drawer.Screen name="Notifications" component={Noifications} />
//           <Drawer.Screen name="Logout" component={Logout} />
//     </Drawer.Navigator>

//     </NavigationContainer>

   
//   );
// }

// export default class Home extends Component {
//  render(){
//   return (
//       <MyDrawer />


//   );
// }
// }









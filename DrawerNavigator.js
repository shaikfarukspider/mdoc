import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {View , Text} from 'react-native';


 import MyAppointments from './MyAppointments';
 import Notifications from './Notifications';
 import Profile from './Profile';
 import Logout from './Logout';
import StackNavigator from './StackNavigator';

const MyDrawerNavigator = createDrawerNavigator({
    Home: {screen: StackNavigator},
     Profile: {screen:  Profile},
    Appointment: {screen: MyAppointments},
    Notifications: {screen: Notifications},    
    Logout: {screen: Logout},
},
{
    initialRouteName: 'Home',
    drawerWidth: 200,
    drawerPosition: 'left',    

}

);

const AppContainer = createAppContainer(MyDrawerNavigator);

export default class DrawerNavigator extends Component {
    constructor(props){
        super(props);
      this.state={
          data: ' '
      }
{ 
   global.id=this.props.urname  
}

    }
    

    render() {
        
        return(
         
        <AppContainer/>
        );
    }
}
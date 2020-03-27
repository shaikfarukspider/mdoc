import { createStackNavigator } from 'react-navigation-stack';
import React,{Component} from 'react';
import {Router,Stack,Scene } from 'react-native-router-flux';
import Splashscreen from './Splashscreen';
import Reg from './Reg';
import Login from './Login';
import Welcomes from './Welcomes';
import Otppage from './Otppage';
import NextPage from './Nextpage';
import Resendotp from './Resendotp';
import Home from './Home';
import Logout from './Logout';
import List from './List';
import Profile from './Profile';
import Forget from './Forget';

 import DrawerNavigator from './DrawerNavigator';
   export default class AppNavigator extends Component{
     render(){
       return(
        <Router>
        <Stack key="root" hideNavBar={true}>
        <Scene key="Splashscreen" component={Splashscreen} title="Splashscreen" initial={true}/>
          <Scene key="Welcomes" component={Welcomes} title="Welcomes"/>
          <Scene key="Forget" component={Forget} title="Forget"/>
          <Scene key="Reg" component={Reg} title="Reg"/>
          <Scene key="otppage" component={Otppage} title="otppage"/>
          <Scene key="NextPage" component={NextPage} title="NextPage"/>
          <Scene key="Login" component={Login} title="Login"/>
          <Scene key="Resendotp" component={Resendotp} title="Resendotp"/>
          <Scene key="Home" component={Home} title="Home"/>
          <Scene key="Logout" component={Logout} title="Logout"/>
          <Scene key="Profile" component={Profile} title="Profile"/>
          <Scene key="DrawerNavigator" component={DrawerNavigator} title="DrawerNavigator"/>
        </Stack>
        </Router>
       )
     }
   }
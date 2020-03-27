import React, {Component} from 'react';
import {View,Text} from 'react-native';
import { createAppContainer } from 'react-navigation';
 import {createStackNavigator} from 'react-navigation-stack';
import  Finddoctor from './List';
import Password from './Password';
 
  import Appoint from './Appoint';
  import Conform from './Conform';
  import Edit from './Edit';
import UserHome from './UserHome';
const MyStackNavigator = createStackNavigator(
  {    
  Home: {screen:UserHome},
    // Screen4: Screen4,
    // Screen5: Screen5,
    // Finddoctor: {screen:Finddoctor }, 
    // Appoint:{screen: Appoint}   ,
    // Conform:{screen: Conform}  ,
    

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {  
      headerStyle: { height: 55, backgroundColor: '#154360' },
      headerTintColor: '#fff',
      // headerTitleStyle: { fontWeight: 'bold', color: '#fff' },
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 500,
      },
      screenInterpolator: sceneProps => {
      const { position, layout, scene } = sceneProps;
      const index = scene.index;
      const width = layout.initWidth;

      const slideFromRight = { 
        opacity: position.interpolate({
              inputRange: [ index, index + 1],
              outputRange: [1, 1], 
            }),
        transform: [{ 
          translateX: position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [width, 0, -20],
            })
      }] };
        return slideFromRight;
      },
    }),
  }
);

const AppContainer = createAppContainer(MyStackNavigator);

export default class StackNavigator extends Component {
  render() {
    // return <AppContainer screenProps={{ openDraw: () => this.props.navigation.dispatch(DrawerActions.openDrawer())}} />;
     return <AppContainer/>
    
    
  }
  }
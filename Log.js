import  React,{Component} from 'react';
import {Image,Text, View, TextInput, Button, StyleSheet} from 'react-native'; 
  import Welcomes from"./Welcomes";
  export default class Log extends Component{
constructor(){
        super()
              this.state={
                    showMe:true
              }
        }


      componentWillMount(){
       setTimeout(()=>{
             this.setState({
                   showMe:false
       })
 },
 5000)
}
render(){
      return(
<View style={styles.container}>{
            this.state.showMe?<Image source={require("./image.jpg")}/>
            :
            <View>
           <Welcomes/> 
            
              </View>
}
            </View>

      )
}
  }
  const styles=StyleSheet.create({
container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
},
// text:{
//        color:'#321abc',
//         fontSize:35,
//         alignContent:'center',
//         justifyContent:'center',
//         flexDirection:'column'

// }
})

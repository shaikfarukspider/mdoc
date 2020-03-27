import React,{Component} from 'react';  
import { View, Text, Button,Image,TouchableOpacity , TextInput, StyleSheet,RefreshControl,  Switch,ScrollView,SafeAreaView} from 'react-native';  
   import {Actions}  from 'react-native-router-flux';
   import ImagePicker from 'react-native-image-picker';
    import RNFetchBlob from 'rn-fetch-blob';
 import Upload from './Upload';

   const options={
    title: 'my pic app',
    takePhotoButtonTitle: 'Take photo with your camera',
    chooseFromLibraryButtonTitle: 'Choose photo from library',
  }
  
export default class Profile extends Component {  
  constructor(props){
    super(props);
  this. state={
    // data
    username:'',
    useremail:' ',
   usermobile:' ',
   // profile pic
      avatarSource: null,
      pic:null,

     name:'',
      email:'',
      mobile:' ',
// profile data
       dp:' ',
      file: '',
   
// changing password

      
     oldpassword:' ',
     newpassword:' ',
     conformpassword:' '

 }
 
}


// vall=idating data
validate_field=()=>{
  const { oldpassword,newpassword, conformpassword}=this.state 
  if(oldpassword==" "){
 alert("please enter oldpassword")
  return false
  }else if(newpassword==" "){
         alert("please enter newpassword")
         return false
 }else if(conformpassword==""){
         alert("please enter conformpassword")
         return false
 }
  return true
}





// refreshing data 
 refresh=()=>{
  setTimeout(() => {
 this.componentDidMount()
}, 1000);
}
 
//  getting data from api 
    componentDidMount(){
        fetch("https://manadoctor.spiderfever.com/api/get_profile",{
                method:"POST",
                 headers:{
                         'Accept':'application/json',
                         'Content-Type':'application/json',
                 },
                 body:JSON.stringify({
                 user_id: global.id
                 
        
                 })
        
        }).then((response)=>response.json())
        .then((responseJson)=>{
            console.log(responseJson)
       this.setState({name:responseJson.data.name})
       this.setState({email:responseJson.data.email})
       this.setState({mobile:responseJson.data.mobile}) 
        this.setState({dp:responseJson.data.profile})
                  }).catch(error=>{
                console.log(error)})
        
                }
         

// getting profile from mobile 
                myfun=()=>{
                  ImagePicker.showImagePicker(options, (response) => {
                    console.log('Response = ', response)
                     this.setState({fileNames:response.fileName})
                     if( response.uri){
                     setTimeout(() => {
                      this.uploadPic()
                    }, 3000);
                  }
                   if (response.didCancel) {
                      console.log('User cancelled image picker');
                    }
                    else if (response.error) {
                      console.log('Image Picker Error: ', response.error);
                    }
                
                    else {
                      let source = { uri: response.uri };
                      
                      // You can also display the image using data:
                      // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                
                      this.setState({
                        avatarSource: source,
                        pic:response.data
                      });
                    }
                  });

                    
                    }





                    
// updating profile pic 
                uploadPic=()=>{
                  // alert('ddf');
                  var new_date=new Date().getTime()
                    var filenames= new_date+'.jpg'
                     this.setState({file:filenames})
                  RNFetchBlob.fetch('POST', 'https://manadoctor.spiderfever.com/api/profile_image', {
                    Authorization : "Bearer access-token",
                    otherHeader : "foo",
                    'Content-Type' : 'multipart/form-data',
                  }, [
                    // element with property `filename` will be transformed into `file` in form data
                    { name : 'image',filename : filenames ,data: this.state.pic},
                  
                      ],
                      ).then((resp) => {
                    console.log(resp)
                    this.setState({avatarSource:null})
                  })
                }


                // upadting profile data
                upload=()=>{
                
                 fetch("https://manadoctor.spiderfever.com/api/submit_profile",{
                  method:"POST",
                  headers:{
                          'Accept':'application/json',
                          'Content-Type':'application/json',
                  },
                  body:JSON.stringify({
                  user_id:global.id,
                  name: this.state.username,
                  email:this.state.useremail,
                  mobile:this.state.usermobile,
                  profile_pic:this.state.file
         
                  })
                }).then((response)=>response.json())
                .then((responseJson)=>{
                    this.setState({presp:responseJson.message})
                    console.log(responseJson.message)
                    if(responseJson.message=="Submitted Successfully."){
                       alert("profile updated successfully")
                        this.refresh()
                         this.setState({file:null})
                    }else{
                       
                      alert("profile is not updated")
                    }
                          }).catch(error=>{
                        console.log(error)})
                        }
                        
                       // changing password
                        change=()=>{
                         if(this.validate_field()){
                         fetch("https://manadoctor.spiderfever.com/api/change_password",{
                            method:'POST',
                          headers:{
                           'Accept':'application/json',
                           'Content-Type':'application/json',
                   },
                            body:JSON.stringify({
                             user_id:global.id,
                           old_password: this.state.oldpassword,
                           new_password: this.state.newpassword,
                           confirm_password: this.state.conformpassword,
                  
                  
                            })
                          }).then((response)=>response.json())
                          .then((responseJson)=>{
                             alert(responseJson.message)
                              console.log(responseJson)
                                    }).catch(error=>{
                                  console.log(error)})
                          
                                  }
                                }
                                
              
    render() {  
        return (  
            <View>  
            <View style={{flexDirection:'row',alignItems: 'center', justifyContent:"space-between",backgroundColor:'#154360'}}>      
                    
 <TouchableOpacity title="Toggle drawer" onPress={() => this.props.navigation.openDrawer()}> 

 <Image source={require("./icons/bar.png")} style={{width: 40, height: 40}}/>
</TouchableOpacity>
</View>

<View style={{paddingTop:10,alignItems:'center'}}>

<TouchableOpacity title="edit" onPress={this.myfun}><Text style={{ color:'black',textAlign:'center',justifyContent:'center',alignItems:'center',fontSize:20}}> Profile</Text>
{ this.state.dp?
 
<Image style={{ width: 100, height: 100, borderRadius: 100 /2 }}
          source={{uri:'https://manadoctor.spiderfever.com/User/Profile/'+this.state.dp}}
        />
       :
        <Image style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
        source={require('./icons/user.png')}
      />
    }
    </TouchableOpacity>


    { this.state.file?
<View>
<TextInput  style={ styles.input}  placeholder="Enter Username"  onChangeText={(value)=>this.setState({username:value})} /> 
<TextInput  style={ styles.input}   placeholder="enter Email" onChangeText={(value)=>this.setState({useremail:value})} /> 
<TextInput  style={ styles.input} placeholder="enter Mobile" onChangeText={(value)=>this.setState({usermobile:value})} /> 
    {/* <TouchableOpacity onPress={this.upload} style={styles.input}><Text style={styles.text}> upload</Text></TouchableOpacity> */}
  
    <TouchableOpacity onPress ={this.upload}>
    <View style = {{backgroundColor: '#154360', alignItems: 'center', 
                    justifyContent: 'center', borderRadius: 15,width:300 , height:40,borderWidth:1}}>
        <Text style = {{color: 'white',fontWeight: 'bold',fontSize:18,}}>Update</Text>
    </View>
</TouchableOpacity>
  </View>:<View><TextInput  style={ styles.input}  value={this.state.name} /> 
  <TextInput  style={ styles.input}  value={this.state.email} /> 
  <TextInput  style={ styles.input}  value={this.state.mobile} /> 
  </View>


    }
</View>
<View style={{ alignContent:'center' , justifyContent:'center',alignItems:'center'}}> 
  <Text style={{  fontSize:20}}> change Password</Text>
<TextInput  style={ styles.input}  placeholder="Enter old password"  onChangeText={(value)=>this.setState({oldpassword:value})} /> 
<TextInput  style={ styles.input}   placeholder="Enter new password" onChangeText={(value)=>this.setState({newpassword:value})} /> 
<TextInput  style={ styles.input} placeholder="Enter confrom password" onChangeText={(value)=>this.setState({conformpassword:value})} />
<View>
<TouchableOpacity onPress={this.change}>
<View style = {{backgroundColor: '#154360', alignItems: 'center', 
                    justifyContent: 'center', borderRadius: 15,width:300 , height:40,borderWidth:1}}>
        <Text style = {{color: 'white',fontWeight: 'bold',fontSize:18,}}>changepassword</Text>
    </View>
  </TouchableOpacity>

  </View>
</View>
</View>
        );  
    }  
}
const styles=StyleSheet.create({
input: {
  width: 300,
  height: 44,
  padding: 10,
  marginBottom: 10,
  backgroundColor: 'white',
  borderRadius:10,
  borderColor:"#32163B",

  textAlign: 'center', // <-- the magic
  fontWeight: 'bold',
   fontSize:15,
   borderWidth:1
  },
  

});











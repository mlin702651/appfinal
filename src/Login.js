import React, { useState }  from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { RNCamera, FaceDetector } from 'react-native-camera';
import { Button } from "react-native-elements";
import Input from "../components/Input";

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;

const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    console.log(`email=${email}`);
    console.log(`password=${password}`);
    return (
      <View style={styles.container}>
        <Image
        source={require('../images/background.png')}
        style={styles.background}
        />
        <View style={styles.login}>
             <Text style={styles.title}>登入</Text>
            <Image
            source={require('../images/logo.png')}
            style={styles.logo}
            />
        </View>
        <View style={styles.formStyle}>
        <Input
          labelStyle={{ marginTop: 20 }}
          label="Email"
          placeholder="ntue@dtd.com"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <Input
          labelStyle={{ marginTop: 20 }}
          label="Password"
          placeholder="Must have at least 7 characters"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
       
      </View>
        {/* <View style={styles.input}>
            <Image
                source={require('../images/logininput.png')}
                style={styles.logininput}
            />
            <Image
                source={require('../images/logininput.png')}
                style={styles.logininput}
            />
            <Image
                source={require('../images/logininput.png')}
                style={styles.logininput}
            />
        </View> */}
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonword}>登入</Text>
            <Image
            source={require('../images/loginarrow.png')}
            style={styles.loginarrow}
            />
        </TouchableOpacity>
      </View>
    );
  };
  export default Login;
  const styles = StyleSheet.create({
    formStyle: {
        marginTop: 150,
      },
    // container: {
    //   flex: 1,
    //   justifyContent: "center",
    //   backgroundColor:"#474747",
    // },
    // background: {
    //     width:SCREENWIDTH,
    //     height:SCREENHEIGHT,
    //     zIndex:0,
    //     marginTop:SCREENHEIGHT*0.0575,
    // },
    // login:{
    //     flexDirection:'row',
    //     position:'absolute',
    //     top:94,
    //     alignSelf:'center'
    // },
    // loginarrow:{
    //     width:24,
    //     height:24, 
    // },
    // title:{
    //     fontSize:48,
    //     color:'white',
    // },
    // logo:{
    //     width:65,
    //     height:65,
    //     marginLeft:170,
    // },
    // input:{
    //     position:'absolute', 
    //     top:198,
    //     left:86,
    // },
    // logininput:{
    //     width:290,
    //     height:80,
    //     resizeMode:'stretch',
    //     marginTop:8,
    // },
    // button:{
    //     backgroundColor:'#5E6B7B',
    //     width:95,
    //     height:43,
    //     borderRadius:10,
    //     position:'absolute',
    //     top:478,
    //     left:272,
    //     flexDirection:'row',
    //     alignItems:'center',
    // },
    // buttonword:{
    //     textAlign:'center',
    //     color:'white',
    //     fontSize:16,
    //     marginLeft:25,
    // },
  });

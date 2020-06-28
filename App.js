import React from 'react';
import * as firebase from "firebase";
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Home'
import MyClothet from './src/MyClothet'
import AddCloth from './src/Addcloth'
import Hint from './src/Hint'
import Leaderboard from './src/Leaderboard';
// import MyStack from './src/MyStack';
import MyStackhome from './src/MyStackhome';
import Header from './src/Header';
import Changebutton from './src/Changebutton';
import Login from './src/LoginSrc';
import Camera from './src/Camera';

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;
const Tab = createBottomTabNavigator();
const firebaseConfig = {
  apiKey: "AIzaSyA7ibSfgPFFtzt7Z7dvAq6Ew9h8Fcfx1LE",
  authDomain: "clothes-23443.firebaseapp.com",
  databaseURL: "https://clothes-23443.firebaseio.com",
  projectId: "clothes-23443",
  storageBucket: "clothes-23443.appspot.com",
  messagingSenderId: "603012724012",
  appId: "1:603012724012:web:a2e8bcd358ca5ff215e889",
  measurementId: "G-NFSC117SM8"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


export default function App() {
  

  return (
    <Login></Login>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },

});

import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import Home from './Home';
import Hint from './Hint';
import Header from './Header';

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;

function MyClothet({navigation}){
  return (
    <View style={styles.container}>
      <Text style={styles.bigtitle}>我的衣櫃</Text>
      <Header></Header>
      <Image
      source={require('../images/background.png')}
      style={styles.background}
      />
      <TouchableOpacity style={styles.leaderbutton} onPress={() => navigation.navigate('Leaderboard')}>
        <Text style={styles.leaderword}>排行</Text>
        <Image
        source={require('../images/leaderboard.png')}
        style={styles.leaderboard}
        />
      </TouchableOpacity>
      <View style={styles.index1}>
        <Image
        source={require('../images/whiteback.png')}
        style={styles.whiteback}
        />
        <View style={styles.titlebox}>
          <View style={styles.titlebar}></View>
          <Text style={styles.title}>搭配衣物</Text>
        </View>
        <View style={styles.clothbox}>
            <Image
            source={require('../images/hanger.png')}
            style={styles.hanger}
            />
          <Image
          source={require('../images/blueline.png')}
          style={styles.blueline}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.hintbutton} onPress={() => navigation.navigate('Hint',navigation)}>
        <Image
        source={require('../images/hint.png')}
        style={styles.hint}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={function(){console.log('set todays outfit')}}>
        <Text style={styles.buttonword}>設定為今日搭配</Text>
      </TouchableOpacity>
      <ScrollView style={{zIndex:5}}>
        <View style={styles.selectlist}>
          <View style={styles.list}> 
            <Text style={styles.word1}>上衣</Text>
            <Text style={styles.word}>下身</Text>
            <Text style={styles.word}>外套</Text>
            <Text style={styles.word}>搭配</Text>
            <Image
            source={require('../images/plusbtn.png')}
            style={styles.plusbtn}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default MyClothet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bigtitle:{
    fontSize:18,
    color:'white',
    fontWeight:'bold',
    position:'absolute',
    top:40,
    alignSelf:'center',
    zIndex:5,
},
  background: {
    width:SCREENWIDTH,
    height:SCREENHEIGHT,
    zIndex:0,
    marginTop:SCREENHEIGHT*0.0575,
  },
  leaderbutton:{
    width:SCREENWIDTH*0.16267,
    height:SCREENHEIGHT*0.035,
    zIndex:3,
    position:'absolute',
    right:SCREENWIDTH*0.0587,
    top:SCREENHEIGHT*0.13215,
    flexDirection:'row',
  },
  leaderword:{
    fontSize:17,
    color:'#FCF4E9',
    justifyContent:'center',
  },
  leaderboard:{
    width:SCREENWIDTH*0.06125,
    height:SCREENHEIGHT*0.035,
    marginLeft:6,
  },
  index1:{
    width:SCREENWIDTH*0.9146,
    height:SCREENHEIGHT*0.6832,
    zIndex:1,
    alignSelf:'center',
    position:'absolute',
    top:SCREENHEIGHT-8,
  },
  whiteback:{
    width:SCREENWIDTH*0.9146,
    height:SCREENHEIGHT*0.6832,
    resizeMode:'stretch',
    marginTop:-SCREENHEIGHT*0.815,
  },
  titlebox:{
    marginTop:-SCREENHEIGHT*0.674,
    marginLeft:SCREENWIDTH*0.0173,
  },
  title:{
    fontSize:20,
    color:'white',
    marginTop:-28.5,
  },
  titlebar:{
    borderColor:'#5674AC',
    height:0,
    width:SCREENWIDTH*0.2053,
    borderWidth:4,
    borderRadius:5,
    opacity:0.95,
    marginLeft:18,
  },
  clothbox:{

  },
  hanger:{
    width:SCREENWIDTH*0.1992,
    height:SCREENHEIGHT*0.0507,
    alignSelf:'center',
    marginTop:3,
  },
  blueline:{
    width:SCREENWIDTH*0.4533,
    height:SCREENHEIGHT*0.0163,
    alignSelf:'center',
    marginTop:SCREENHEIGHT*0.2617,
  },
  hint:{
    width:40,
    height:40,
  },
  hintbutton:{
    marginTop:-665,
    marginLeft:342,
    zIndex:3,
  },
  button:{
    zIndex:2,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    width:SCREENWIDTH*0.336,
    height:SCREENHEIGHT*0.053,
    borderRadius:10,
    backgroundColor:"#5E6B7B",
    marginTop:395,
  },
  buttonword:{
    fontSize:16,

    color:'white',
    zIndex:2,
  },
  selectlist:{
    width:SCREENWIDTH,
    height:SCREENHEIGHT,
    backgroundColor:"#333333",
    borderRadius:17,
    marginTop:SCREENHEIGHT*0.06463,
    zIndex:5,
  },
  list:{
    flexDirection:'row',
    alignItems:'center',
  },
  word1:{
    color:'white',
    fontSize:16,
    marginLeft:35
  },
  word:{
    color:'white',
    fontSize:16,
    marginLeft:53
  },
  plusbtn:{
    marginLeft:44
  },
});

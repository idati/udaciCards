import React from 'react';
import {  StyleSheet, 
          Text, 
          View,
          StatusBar,
          Platform, } from 'react-native';
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Deck from './components/Deck'
import Card from './components/Card'
import NewDeck from './components/NewDeck'
import NewCard from './components/NewCard'
import SinglCard from './components/SinglCard'
import Quiz from './components/Quiz'
import {white, purple} from './utils/colors'
import reducer from './reducers'
import {Constants} from 'expo'
import { connect } from 'react-redux';
import{FontAwesome, Ionicons, Entypo, MaterialCommunityIcons} from '@expo/vector-icons'
import {setLocalNotification} from './utils/api'

function UdaciStatusBar ({backgroundColor, ...props}){
  return(
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
          <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const Tabs = TabNavigator({

  Deck:{
    screen: Deck,
    navigationOptions: {
      tabBarLabel: 'Deck',
      tabBarIcon:({tintColor}) => <FontAwesome name='inbox' size={30} color={tintColor} />
    }
  },


  // NewDeck: {
  //   screen: NewDeck,
  //   navigationOptions: {
  //     tabBarLabel: 'New Deck',
  //     tabBarIcon:({tintColor}) => <Ionicons name='md-add-circle' size={30} color={tintColor} />
  //   }
  // },

  Card: {
    screen: Card,
    navigationOptions: {
      tabBarLabel: 'Cards',
      tabBarIcon:({tintColor}) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
    }
  },

  SinglCard: {
    screen: SinglCard,
    navigationOptions: {
      tabBarLabel: 'Card',
      tabBarIcon:({tintColor}) => <Ionicons name='ios-card-outline' size={30} color={tintColor} />
    }
  }, 

  // NewCard: {
  //   screen: NewCard,
  //   navigationOptions: {
  //     tabBarLabel: 'New Card',
  //     tabBarIcon:({tintColor}) => <Ionicons name='md-add-circle' size={30} color={tintColor} />
  //   }
  // }, 

  Quiz: {
    screen: Quiz,
    navigationOptions: {
      tabBarLabel: 'Quiz',
      tabBarIcon:({tintColor}) => <Ionicons name='ios-game-controller-b' size={30} color={tintColor} />
      //
    }
  },   


  }, {
    navigationOptions:{
        header: null
    },

    tabBarOptions: {
      activeTintColor: Platform.OS ==='ios' ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS ==='ios' ? white : purple,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset:{
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  

})


const MainNavigator = StackNavigator({
    root:{
      screen: Tabs,
    },
    Deck:{
      screen: Deck,
      navigationOptions:{
        headerTintColor: white,
        headStyle: {
          backgroundColor: purple,
        }
      }
    }
  })

export default class App extends React.Component {
 //
  componentDidMount(){
    setLocalNotification()
  }
      // 
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex:1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle='light-content' />
            <MainNavigator/>
        </View>
      </Provider>
    );
  }
}
// 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    input:{
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50,
  }
});

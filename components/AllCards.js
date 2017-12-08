import React, {Component} from 'react'
import {  StyleSheet, 
          Text, 
          View,
          StatusBar,
          TouchableOpacity,
          Platform,
          FlatList, } from 'react-native';
import {white, purple} from '../utils/colors'


class AllCards extends Component {
  static navigationOptions = {
    title: 'AllCrad',
  }

  constructor(props) {
    super(props)
    console.log('AllCards', this)
    this.renderItem = this.renderItem.bind(this);
  }

  state= {
    values: 0,
  }

  static navigationOptions = ({navigation}) => {
    console.log('navigation',navigation.state.params)

    if(navigation.state.params!== undefined){const {viewer} = navigation.state.params}
    

  }


	render(){
	return(

        <View style={{flex:1}}>
            <View style={{flex:1}}>
              <FlatList
                data={[{ "question":"Hi", 
                "answer":"JK",
                "id": "1512043883062",
                "deckId": "1511508346673",
                "title": "Test",}]}
                keyExtractor={item => item.id}
                renderItem={this.renderItem}>
              </FlatList>
            </View><Text>Test</Text>
        
        </View>

		)
	}
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    // paddingTop: 9,
    paddingRight: 15,
    paddingBottom: 9,
    paddingLeft: 15,
    borderBottomWidth: 10,
    // behavior='padding',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 5,
    // background: '#ecf0f1'
    marginTop: 8, 
    marginLeft: 8,
    marginRight: 8,
    alignItems: 'stretch',
    // justifyContent: 'center',
  },
  input:{
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50,
  },
    img:{
    width: 100,
    height: 100,
    margin: 50,
  }
})

export default AllCards

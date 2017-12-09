import React, {Component} from 'react'
import {View, 
		Text, 
		TouchableOpacity, 
		Button, 
		FlatList, 
		StyleSheet,
    KeyboardAvoidingView,
    TextInput,
		Platform} from 'react-native'
// import Card from './Card'
import NewDeck from './NewDeck'
import AllDecks from './AllDecks'
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation'
import {white, purple} from '../utils/colors'
import{FontAwesome, Ionicons, MaterialIcons} from '@expo/vector-icons'
import {saveDeckTitle, getDecks, removeDeckTitle} from '../utils/api'
import {getAllDecks} from '../actions/index'
import {connect} from 'react-redux'

// const Tabs = TabNavigator({
//   AllDecks: {
//     screen: AllDecks,
//     navigationOptions: {
//       tabBarLabel: 'List',
//       tabBarIcon:({tintColor}) => <Ionicons name='ios-list' size={30} color={tintColor} />
//     }
//   },

//   NewDeck: {
//     screen: NewDeck,
//     navigationOptions:{
//       tabBarLabel: 'Add',
//       tabBarIcon:({tintColor}) => <Ionicons name='ios-add-circle' size={30} color={tintColor} />      
//     }
//   },
  
//   }, {
//     navigationOptions:{
//         header: null
//     },

//     tabBarOptions: {
//       activeTintColor: Platform.OS ==='ios' ? purple : white,
//       style: {
//         height: 56,
//         backgroundColor: Platform.OS ==='ios' ? white : purple,
//         shadowColor: 'rgba(0, 0, 0, 0.24)',
//         shadowOffset:{
//           width: 0,
//           height: 3
//         },
//         shadowRadius: 6,
//         shadowOpacity: 1
//       }
//     }
  

// })


// const MainNavigator = StackNavigator({
//     Home:{
//       screen: Tabs,
//     },
//     NewDeck:{
//       screen: NewDeck,
//       navigationOptions:{
//         headerTintColor: white,
//         headStyle: {
//           backgroundColor: purple,
//         }
//       }
//     }
//   })

class Deck extends Component {

	state={
		dat: [],
    new: false,
    text: 'NewDeckName',
	}

	componentDidMount(){
    // console.log('importante',prevState)
    // if(prevState){
    //     console.log('importante',prevState)
    //     this.deleteDeck(prevState.title)
    //   }
		const {getAllDecks, deck} = this.props
		// this.props.getAllDecks()
    console.log('###',this)
		getDecks().then(res => {
          var arrayvar=[]
					// var arrayvar=this.state.dat.slice()
					for(key in res){
						// dat.push({res[key]}),
						console.log('key', res[key]),
						arrayvar.push(res[key])
						// this.props.dispatch(getAllDecks())
					}
          // console.log('looklook',arrayvar)
          this.setState({dat: arrayvar})
          // getAllDecks(arrayvar)
				})
    getDecks().then(res => {
      this.props.dispatch(getAllDecks(res))
    })

		console.log('dat', this.state.dat, this)
	} 

  // componentWillReceiveProps( nextProps ) {
  //   console.log('nextProps',nextProps)
  // }

  updateState = () => {
    this.setState({new: !this.state.new})
  }

  updateStatedat=(newD)=>{
      // this.setState({dat: newValue})
      console.log('YESSSSSSSSSS')
  }

  insertNewDeck=(newDeck) =>{
    var hilf=this.state.dat.slice()
    var newDeckArray={}
    console.log('newDeck',newDeck)
    newDeckArray[newDeck]={'title': newDeck, 'questions':[]}
    hilf.push(newDeckArray[newDeck])
    console.log('hilfhilfhilf',hilf)
    this.setState({dat: hilf})
  }

  deleteDeck=(removeDeck) =>{
    var hilf=this.state.dat.slice()
    res=[]
    // console.log('üüü',hilf)
    for (i in hilf){ 
      console.log('üüühhh',hilf[i].title, removeDeck.title.title)
      if (hilf[i].title!==removeDeck.title.title){ 
            // console.log('üüü',hilf[i].title, removeDeck)
            res.push(hilf[i])
      }
    }
    console.log('hilfhilfhilf',res, this.state)
    // return res
    // console.log('üüü', removeDeck)
    this.setState({dat: res})
  }

	static navigationOptions = {
    	title: 'Deck',
    	
  	}


    componentDidUpdate(prevProps, prevState) {

    if(this.props.navigation.state.params){ 
          const{shouldDelete} = this.props.navigation.state.params
          console.log('shouldDelete',shouldDelete)
          // this.setState({dat: shouldDelete})
    }
    var x = 0
    // if(this.props.navigation){
    // if(this.props.navigation.state){
    //   if(this.props.navigation.state.params){
        if(this.props.navigation.state.params){
                      removeDeckTitle(this.props.navigation.state.params.shouldDelete.title.title)
                      console.log('ööö',this.props.navigation.state.params.shouldDelete.title.title)
                      // var x = this.deleteDeck(this.props.navigation.state.params.shouldDelete.title.title)
                      
                      if(x !== 0){
                        console.log('üüü',x)
                        // this.updateStatedat(x)
                        // 
                      }
                      // 

                    }
    //     }
    //   }
    // }
    }


  	constructor(props) {
    	super(props)

    	this.renderItem = this.renderItem.bind(this);
  	}

 
  	goToDeck() {
    	const { navigation, card } = this.props;

    	console.log('push', this.state)

    	this.props.navigation.navigate('Card', 
    	{
      	viewer: 'read',
     //  	id: deck.id
    	}
    	)
  	}


 	renderItem({ item }) {
 		console.log('check',item, this.state, this)
    	const { navigation } = this.props;

    	return (
    		<TouchableOpacity 
    			style={styles.container}
    			onPress={() => this.props.navigation.navigate('Card',{title:item, deleteDeck:this.deleteDeck, deletet:false})}>
    			<View><Text>{item.title}</Text></View>
    		</TouchableOpacity>

    )
  	}

	render(){
		// var dat=[]
		console.log('kaffee',this)
		// const { card } = this.props
		const {card} = this.props
    // console.log('üüü',x)

  if (this.state.new===false){
  
            return(
             <View style={{flex:1}}>
              <View style={{flex:1}}>
                <FlatList style={{flex:1}}
                  data={this.state.dat}
                  keyExtractor={item => item.title}
                  renderItem={this.renderItem}>
                </FlatList>
              </View>
               <TouchableOpacity style={styles.button} onPress={() => (
                                            console.log('this',this), 
                                            // this.props.navigation.navigate(
                                            //                                 'Quiz',
                                            //                                 { entryId: key }
                                            //                               ),
                                            this.setState({new: true})
                  )}>
               <Text style={styles.submitBtnText}>New Deck</Text>
                </TouchableOpacity>
            </View>
            )}
  else{

            return(

                    <View>
                       <View 
                        // style={{
                        //  backgroundColor: this.state.text,
                        //  borderBottomColor: '#000000',
                        //  borderBottomWidth: 1 }}
                       >
                         <TextInput
                           style={styles.input}
                           onChangeText={(text) => this.setState({text})}
                           value={this.state.text}
                         />
                     </View>
                        <TouchableOpacity style={styles.button} onPress={() => (
                            console.log('this',this.state.text),
                            // this.props.navigate('Quiz',{ entryId: key}),
                            saveDeckTitle(this.state.text),
                            this.insertNewDeck(this.state.text),
                            this.updateState(),
                            this.props.navigation.navigate('Card',{title:{'title':this.state.text, 'questions':[]}, deleteDeck:this.deleteDeck, deletet:false}),
                            this.setState({text:'NewDeckName'})
                            // this.props.navigation.navigate('Deck', {newDeck: this.state.text})
                            // Keyboard.dismiss
                            // this.props.navigation.goBack()
                          )}><Text style={styles.submitBtnText}>Insert</Text>
                        </TouchableOpacity>
                     </View>                

            )
  
              // return(
              //  <View style={{flex:1}}>
              //  <KeyboardAvoidingView>
              //   <View style={{flex:1}}>
              //     <FlatList style={{flex:1}}
              //       data={this.state.dat}
              //       keyExtractor={item => item.title}
              //       renderItem={this.renderItem}>
              //     </FlatList>
              //   </View>
              //     <NewDeck updateState={this.updateState} insertNewDeck={this.insertNewDeck}/>
              //   </KeyboardAvoidingView>
              // </View>
              // )
      }
	}
}


// {[{ "cardsTotal":1, 
// 						"id":"1511508346673",
// 						"key": "1511508346673",
// 						"title": "Test",},
// 						{ "cardsTotal":2, 
// 						"id":"1511508346674",
// 						"key": "1511508346674",
// 						"title": "Test2",}]}



// const ModalStack = StackNavigator({
// 	Deck:{
// 		screen: Deck,
// 	},
// 	Card:{
// 		screen:Card,
// 	},
// })


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
    borderBottomWidth: 1,
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
  },
      button: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 30,
  },
  submitBtnText:{
    color:'white',
    fontSize: 22,
    textAlign: 'center',
  },
})


// function mapDispatchToProps(dispatch){

// 	return{
// 		getAllDecks: () => dispatch(getAllDecks()),

// 	}
// }

function mapStateToProps(deck) {
  return { 
    deck,
  }
}
export default connect(mapStateToProps)(Deck)

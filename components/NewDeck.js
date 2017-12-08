import React, {Component} from 'react'
import {AppRegistry, 
		View, 
		TextInput, 
		Text, 
		StyleSheet, 
		TouchableOpacity, 
		Platform,
	 	Keyboard,} from 'react-native'
import {white, purple} from '../utils/colors'
import {saveDeckTitle, getDecks} from '../utils/api'
import {connect} from 'react-redux'
import {getAllDecks} from '../actions/index'
// import {saveDeckTitle, getDecks} from '../utils/api'

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {40}
      />
    );
  }
}


class NewDeck extends Component {
	constructor(props) {
    super(props);
    	this.state = {
      		text: 'NewDeckName',
    	};
  	}
	render(){
		console.log('NewNew',this)
	// getDecks().then(res => {
 //      	this.props.dispatch(getAllDecks(res))
 //   	})
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
        		this.props.insertNewDeck(this.state.text),
        		this.props.updateState()
        		// this.props.navigation.navigate('Deck', {newDeck: this.state.text})
        		// Keyboard.dismiss
        		// this.props.navigation.goBack()
        	)}><Text style={styles.submitBtnText}>Insert</Text>
        </TouchableOpacity>
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
  // input:{
  //   width: 200,
  //   height: 44,
  //   padding: 8,
  //   borderWidth: 1,
  //   borderColor: '#757575',
  //   margin: 50,
  input: {
    backgroundColor: white,
    borderRadius: 10,
    borderWidth: 3,
    borderColor:'#757575',
    height: 44,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 20,
    padding: 9
  },
    img:{
    width: 100,
    height: 100,
    margin: 50,
  },
    submitBtnText:{
    color:'white',
    fontSize: 22,
    textAlign: 'center',
  },
    button: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 70,
    marginRight: 70,
    marginTop: 50, 
  },
})


// export default NewDeck


function mapStateToProps(deck) {
  return { 
    deck,
  }
}
export default connect(mapStateToProps)(NewDeck)
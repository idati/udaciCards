import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet,FlatList} from 'react-native'
import {white, purple} from '../utils/colors'
import {saveDeckTitle, getDecks, removeDeckTitle} from '../utils/api'
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation'

class Quiz extends Component {
	state={
		deck: 'nodata',
		qdat: [],
		tdat:[],
    	new: false,
    	count:0,
    	card:'question',
    	correct:0,
    	wrong:0,
	}

	// componentDidMount(){
	componentDidUpdate(){
		if (this.props.navigation.state.params && this.state.count===0 && this.state.qdat.length===0){
			console.log(this.props.navigation.state.params.cdat[0].questions)
			var tmp = []
			tmp.push(this.props.navigation.state.params.cdat[0].questions)
			this.setState({qdat: tmp})
			// this.setState({deck: 'yes'})

			console.log('bring to zero', this)
		}
		if(this.props.navigation.state.params && this.state.qdat[0]){
				console.log( this.state.qdat[0][0].question, this.props.navigation.state.params.cdat[0].questions[0].question)
			}
		if (this.props.navigation.state.params && this.state.qdat[0] && this.state.qdat[0][0].question!==this.props.navigation.state.params.cdat[0].questions[0].question && this.state.count>0){

			console.log("qdat", this.state.qdat)
			var tmp = []
			tmp.push(this.props.navigation.state.params.cdat[0].questions)
			this.setState({qdat: tmp, count: 0, card: 'question', wrong: 0, correct: 0})
		}
		
	}
	// 			console.log('run')
	// 			getDecks().then(res => {
	// 						var arrayvar=[]
	// 						// console.log('res',res)
	// 						// arrayvar=this.state.dat.slice()
	// 						for(key in res){
	// 							// dat.push({res[key]}),
	// 							// console.log('key', res[key]),
	// 							arrayvar.push(res[key]) 
	// 							// this.props.dispatch(getAllDecks())
	// 						}
	// 	          // console.log('looklook',arrayvar)
	// 	          this.setState({qdat: arrayvar})
	// 	          // getAllDecks(arrayvar)
	// 					})
	// 	}
 //    // console.log('importante',prevState)
 //    // if(prevState){
 //    //     console.log('importante',prevState)
 //    //     this.deleteDeck(prevState.title)
 //    //   }
	// 	// const {getAllDecks, deck} = this.props
	// 	// this.props.getAllDecks()
 //    console.log('###',this)
	// 	getDecks().then(res => {
	// 				console.log('res',res)
	// 				var arrayvar=this.state.dat.slice()
	// 				for(key in res){
	// 					// dat.push({res[key]}),
	// 					console.log('key', res[key]),
	// 					arrayvar.push(res[key])
	// 					// this.props.dispatch(getAllDecks())
	// 				}
 //          console.log('looklook',arrayvar)
 //          this.setState({dat: arrayvar})
 //          // getAllDecks(arrayvar)
	// 			})
 //    // getDecks().then(res => {
 //    //   this.props.dispatch(getAllDecks(res))
 //    // })

	// 	// console.log('dat', this.state.dat, this)
	// } 



 	renderItem({ item }) {
 		
    	// const { navigation } = this.props;
    	// console.log('===',this.props)
    	return (
    		<View>
			<TouchableOpacity 
    			style={styles.container}
    			onPress={() => console.log(item)}>
    			<View><Text>{item}</Text></View>
    		</TouchableOpacity>
    		</View>

    )}

	render(){		
		// if (this.props.navigation.state.params && this.state.count===0){
		// 	console.log('bring to zero')
		// 	this.setState({qdat: this.props.navigation.state.params.cdat})
		// }
		// console.log(this.props.navigation.state.params)
		// this.state.qdat[0] && console.log('Data',this.state.qdat[0].questions[0].question)		

		// getDecks().then(res => {
		// 					var arrayvar=[]
		// 					var arr=[]
		// 					// console.log('res',res)
		// 					// arrayvar=this.state.dat.slice()
		// 					for(key in res){
		// 						// dat.push({res[key]}),
		// 						// console.log('key', res[key]),
		// 						arrayvar.push(res[key])
		// 						arr.push(res[key].title) 
		// 						// this.props.dispatch(getAllDecks())
		// 					}
		//           // console.log('looklook',arrayvar)
		//           this.setState({qdat: arrayvar, tdat: arr})
		//           // getAllDecks(arrayvar)
		// 				})

		
		if (this.props.navigation.state.params){
			// console.log(this.props.navigation.state.params.cdat[0].questions.length, this.state.count)
				if(this.props.navigation.state.params.cdat[0].questions.length>=this.state.count+1){
				// console.log('?????',this.state.qdat[0].title)
					
					if(this.state.card==='question'){
						// console.log('2222', this.state.qdat[0])
							return(
									
							   <View style={{flex:1}}>
							   <Text>{this.props.navigation.state.params.cdat[0].title} - {this.state.count+1}/{this.props.navigation.state.params.cdat[0].questions.length}</Text>
							   <TouchableOpacity style={styles.container} onPress={() => (this.setState({card: 'answer'}))}>
							   		<Text style={styles.container}>question: {this.props.navigation.state.params.cdat[0].questions[this.state.count].question}</Text>
							   </TouchableOpacity>

									        <TouchableOpacity style={styles.button} onPress={() => (
									              						// console.log(this.props.navigation.state.params.cdat[0].questions.length, this.state.count+1),
							                                           this.props.navigation.state.params.cdat[0].questions.length>this.state.count && this.setState({count: this.state.count+1, card: 'question', correct: this.state.correct+1})
							                                           // this.props.navigation.navigate(
							                                           //                                 'Quiz',
							                                           //                                 { entryId: key }
							                                           //                               ),
							                                           // this.setState({new: true})
							                 )}>
							              <Text style={styles.submitBtnText}>Correct</Text>
							               </TouchableOpacity>
									        <TouchableOpacity style={styles.button} onPress={() => (
									              						// console.log(this.props.navigation.state.params.cdat[0].questions.length, this.state.count+1),
							                                           this.props.navigation.state.params.cdat[0].questions.length>this.state.count && this.setState({count: this.state.count+1, card: 'question', wrong: this.state.wrong+1})
							                                           // this.props.navigation.navigate(
							                                           //                                 'Quiz',
							                                           //                                 { entryId: key }
							                                           //                               ),
							                                           // this.setState({new: true})
							                 )}>
							              <Text style={styles.submitBtnText}>Wrong</Text>
							               </TouchableOpacity>

							   </View>
							   )
							}
					else{

							return(
									
							   <View style={{flex:1}}>
							   <Text>{this.props.navigation.state.params.cdat[0].title} - {this.state.count+1}/{this.props.navigation.state.params.cdat[0].questions.length}</Text>
							   <TouchableOpacity style={styles.container} onPress={() => (this.setState({card: 'question'}))}>
							   		<Text style={styles.container}>answer: {this.props.navigation.state.params.cdat[0].questions[this.state.count].answer}</Text>
							   </TouchableOpacity>
									        <TouchableOpacity style={styles.button} onPress={() => (
									              						// console.log(this.props.navigation.state.params.cdat[0].questions.length, this.state.count+1),
							                                           this.props.navigation.state.params.cdat[0].questions.length>this.state.count && this.setState({count: this.state.count+1, card: 'question', correct: this.state.correct+1})
							                                           // this.props.navigation.navigate(
							                                           //                                 'Quiz',
							                                           //                                 { entryId: key }
							                                           //                               ),
							                                           // this.setState({new: true})
							                 )}>
							              <Text style={styles.submitBtnText}>Correct</Text>
							               </TouchableOpacity>

									        <TouchableOpacity style={styles.button} onPress={() => (
									              						// console.log(this.props.navigation.state.params.cdat[0].questions.length, this.state.count+1),
							                                           this.props.navigation.state.params.cdat[0].questions.length>this.state.count && this.setState({count: this.state.count+1, card: 'question', wrong: this.state.wrong+1})
							                                           // this.props.navigation.navigate(
							                                           //                                 'Quiz',
							                                           //                                 { entryId: key }
							                                           //                               ),
							                                           // this.setState({new: true})
							                 )}>
							              <Text style={styles.submitBtnText}>Wrong</Text>
							               </TouchableOpacity>
							   </View>
							   )						

					}

					}
				else{
					return(
						<View style={{flex:1}}>
							<Text>{this.props.navigation.state.params.cdat[0].title} - {this.props.navigation.state.params.cdat[0].questions.length}/{this.props.navigation.state.params.cdat[0].questions.length}</Text>
							<Text style={styles.container}>
								Congrats you did it
							</Text>
							<Text style={styles.container}>
								Rate:{Math.round((this.state.correct/(this.state.correct+this.state.wrong))*100)}%
							</Text>
							<Text>
								Correct: {this.state.correct}
							</Text>
							<Text>
								Wrong: {this.state.wrong}
							</Text>
							    <TouchableOpacity style={styles.button} onPress={() => (
							    								this.setState({count:0, wrong: 0, correct: 0})
							          						// console.log(this.props.navigation.state.params.cdat[0].questions.length, this.state.count+1),
							                                     // this.props.navigation.state.params.cdat[0].questions.length>this.state.count && this.setState({count: this.state.count+1, card: 'question', wrong: this.state.wrong+1})
							                                     // this.props.navigation.navigate(
							                                     //                                 'Quiz',
							                                     //                                 { entryId: key }
							                                     //                               ),
							                                     // this.setState({new: true})
							           )}>
							        <Text style={styles.submitBtnText}>Quiz again</Text>
							         </TouchableOpacity>
						</View>
					)
					
				}
			}
		else{
			return(<View><Text>no data found</Text></View>)
		}
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
    // borderBottomWidth: 10,
    // behavior='padding',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 5,
    // background: '#ecf0f1'
    marginTop: 8, 
    marginLeft: 8,
    marginRight: 8,
    alignItems: 'stretch',
    fontSize: 22,
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

export default Quiz

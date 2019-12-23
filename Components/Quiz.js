import React, { Component } from 'react';
import {StyleSheet, View ,Text, TouchableOpacity,Button} from 'react-native';
import { connect } from 'react-redux'
import {white,gray,red, green} from '../utils/colors'

class Quiz extends Component {
    state = { 
        questionNumber: 0,
        showQuestion: false,
        correct: 0,
		incorrect: 0
     }
	
	 RestartQuiz = () => {
		this.setState({
			correct: 0,
			incorrect: 0, 
			questionNumber: 0,
			showAnswer: false
		})
	}

    render() { 
		const { title, cards } = this.props
        const { correct, incorrect, questionNumber, showAnswer } = this.state
        const card = cards[questionNumber]
        const totalQuestions = cards.length
       
		if ( totalQuestions === 0 )
		return (
			<View style={{ flex: 1, backgroundColor: white }}>
				<Text style={[styles.text , {marginTop: 200}]}>There are no cards!</Text>
				<Button 
					title="Back to Deck"
					onPress={() => this.props.navigation.goBack()}/>
			</View>
		)

	if ( questionNumber >= totalQuestions ) {
		return (
			<View style={{ flex: 1, backgroundColor: white }}>
				<Text style={[styles.text ,{marginBottom: 10},{marginTop: 90}]}>You get</Text>
				<Text style={[styles.title ,{marginTop: 10}, {marginBottom: 10}]}>{correct} / {totalQuestions}</Text>
				<Text style={styles.text}>correct</Text>

				<Button 
					title='Restart Quiz'
					onPress={this.RestartQuiz}/>

				<Button
					title='Back to Deck'
					onPress={() => this.props.navigation.goBack()}/>
			</View>
		)}

	return(
		<View style={{ flex: 1, backgroundColor: white }}>
			<View>
				<Text style={{fontSize:20, color:gray, textAlign:'left', margin:5}}>{questionNumber + 1} / {totalQuestions}</Text>
				<Text style={styles.title}>{title}</Text>
				{ showAnswer    
						? <Text style={styles.text}>{ card.answer }</Text>
						: <Text style={styles.text}>{ card.question }</Text> }
			</View>

			<TouchableOpacity onPress={() => this.setState({ showAnswer: !showAnswer})}>
				<View>
				{ showAnswer    
						? <Text style={styles.smallText}>Show Question</Text>
						: <Text style={styles.smallText}>Show Answer</Text> }
				</View>
			</TouchableOpacity>

			<View style={{padding: 10,borderRadius: 7,height: 45,alignSelf: 'stretch',margin: 20,justifyContent:"center",backgroundColor:green}}>
				<Button
				title={'Correct'}
				color={white}
				onPress={() => this.setState({
					correct: correct+1,
					questionNumber: questionNumber+1,
					showAnswer: false
				})}
				/>
			</View>

			<View style={{padding: 10,borderRadius: 7,height: 45,alignSelf: 'stretch',margin: 20,justifyContent:"center",backgroundColor:red}}> 
				<Button
				title={'Incorrect'}
				color={white}
				onPress={() => this.setState({
					incorrect: incorrect+1,
					questionNumber: questionNumber+1,
					showAnswer: false
				})}
				/>
			</View>

		</View>
	)
}
}


const styles = StyleSheet.create({
	submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
        marginTop: 40
    },
    text: {
        fontSize: 30, 
        color: gray,
        textAlign: 'center',
        fontWeight: '300',
        margin: 10,
        marginBottom:30
    },
    smallText: {
        fontSize: 20, 
        color: gray,
        textAlign: 'center',
        fontWeight: '300',
        margin: 10,
        marginBottom:30
    }
})


function mapStateToProps (decks, props) {
    const title = props.navigation.state.params.title
    const cards = decks[title].questions 

    return {
        title,
        cards
    }
}

export default connect(mapStateToProps)(Quiz)
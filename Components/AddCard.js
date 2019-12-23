import React, { Component } from 'react'
import { addCardToDeck } from '../utils/api'
import { addCard } from '../Actions/index'
import { blue, white,purple,black} from '../utils/colors'
import { connect } from 'react-redux'
import { StyleSheet, 
        Text,
        View,
        TextInput,
        KeyboardAvoidingView, 
        Button} from 'react-native'

class AddCard extends Component {
    state = { 
        question: '',
        answer: '',
    }

    submitCard = () => {
        
        const card = this.state
        const title = this.props.navigation.state.params.title
        
        this.props.dispatch(addCard(title, card))

        this.setState(() => ({
            question: '',
            answer: ''
        }))
        addCardToDeck(title, card)

        this.props.navigation.goBack()
    }
    render() { 
        const { question, answer } = this.state

        return ( 
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>What is the question?</Text>
                <TextInput style={styles.input}
                    onChangeText={(question) => this.setState({ question })}
                    value={question}
                />
                <Text style={styles.title}>the answer is</Text>
			    <TextInput
			        style={styles.input}
			        onChangeText={(answer) => this.setState({ answer })}
                    value={answer}
                />
                <View style={{padding: 10,borderRadius: 7,height: 45,alignSelf: 'stretch',margin: 20,justifyContent:"center",backgroundColor:purple}}>
                    <Button 
                    title={'Submit'}
                    color={white} 
                    onPress={this.submitCard}
                    disabled={this.state.question === "" || this.state.answer === ""}/>
                </View>
                

            </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

	},
    title: {
		fontSize: 20,
		color: black,
	},
    input: {
		  width: 250,
		  height: 40,
		  padding: 8,
		  borderWidth: 1,
		  borderColor: purple,
		  margin: 20
	},
})
export default connect()(AddCard);
import React, { Component } from 'react'
import { StyleSheet, Text, View,TextInput, Button } from 'react-native'
import {saveDeckTitle } from '../utils/api'
import { addDeck } from '../Actions/index'
import { connect } from 'react-redux'
import { blue, white,purple,black } from '../utils/colors'


class NewDeck extends Component {
    state ={
      text:''
  }



  submit = () => {
    const title = this.state.text

    saveDeckTitle(title)
    this.props.dispatch(addDeck(title))
    this.props.navigation.navigate(
      'DeckView',
      {deck: {title, questions: []}}
    )
    this.setState(() => ({
      text: ''
    }))
     
}

  render(){
    const { text } = this.state
    return(  
  <View style={styles.container}>
    <Text style={styles.title}>What is the title of your new deck?</Text>

    <TextInput style={styles.input}
      onChangeText={(text)=>this.setState({text})}
      value={text}
      placeholder="Deck's title"
    />

    <View style={{padding: 8,borderRadius: 7,height: 45,alignSelf: 'stretch',margin: 20,justifyContent:"center",backgroundColor:purple}}>
        <Button 
        title={'Create Deck'}
        color={white} 
        onPress={this.submit}
        disabled={this.state.text === "" }/>
    </View>

  </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		borderColor: purple,
    margin: 50,
    width: 250,
    height: 40,
    padding: 8,
    borderWidth: 1,
	},
	title: {
		fontSize: 20,
		color: black,
	}
 
});

export default connect()(NewDeck)

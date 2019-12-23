import React, { Component } from 'react'
import { StyleSheet, Text, View ,Button } from 'react-native'
import { white,purple, gray, black } from '../utils/colors'


class DeckView extends Component {
  

  render() {
    const deck = this.props.navigation.state.params

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{ deck.deck.title }</Text>
                <Text style={styles.text}>{ deck.deck.questions.length !== 0 
                            ? deck.deck.questions.length + 'Cards'
                            : 'No Cards'}</Text>
            <View style={{padding: 10,borderRadius: 7,height: 45,alignSelf: 'stretch',margin: 20,justifyContent:"center",backgroundColor:purple}}>
             <Button title={'Add Card'} color={white} onPress={() => this.props.navigation.navigate('AddCard', {title: deck.deck.title})}/>
          </View>
          <View style={{padding: 10,borderRadius: 7,height: 45,alignSelf: 'stretch',margin: 20,justifyContent:"center",backgroundColor:purple}}>
               <Button title={'Start Quiz'} color={white} onPress={() => this.props.navigation.navigate('Quiz', {title: deck.deck.title})}/>
          </View>
        </View>
    )
}
}
const styles = StyleSheet.create({
	container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
		justifyContent: 'center',
		alignItems: 'center'
  },    
  title: {
    color:black,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10
    },
  text: {
    fontSize: 20, 
    color: gray,
    textAlign: 'center',
    fontWeight: '300',
    margin: 10,
    marginBottom:30
    }
}) 

export default DeckView
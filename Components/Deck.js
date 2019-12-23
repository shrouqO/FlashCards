import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { white, gray } from '../utils/colors'

class Deck extends Component {
    render() {
        const deckName = this.props.deckName
        const cardsNumber = this.props.cardsNumber
     
        return(
            
            <View style={styles.card}>
                <Text style={styles.cardTitle}>{ deckName }</Text>
                <Text style={styles.cardText}>{ cardsNumber }</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: white,
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'stretch',
        marginTop: 17,
        justifyContent: 'center',
        shadowRadius: 9.5,
        shadowOpacity: 0.35,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        elevation: 2,
        flexGrow: 1,
        flexShrink: 1,
        shadowOffset: {
          width: 0,
          height: 5
        },
    },
    cardTitle: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '500',
    },
    cardText: {
        fontSize: 18, 
        color: gray,
        textAlign: 'center',
        fontWeight: '300',
    }
})

export default Deck;
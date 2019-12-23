import React, {Component} from 'react'
import { StyleSheet,View ,FlatList,TouchableOpacity} from 'react-native';
import Deck from './Deck'
import {lightGray} from '../utils/colors'
import {receiveDecks} from '../Actions/index'
import {connect} from 'react-redux'

class DeckList extends Component {
    componentDidMount() {
        this.props.dispatch(receiveDecks())
    }
    

    render() { 
        const {decks} = this.props

        return (
          <View style={styles.container}>
               <FlatList
                    data={Object.values(decks)}
                    renderItem={(item) =>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate(
                                'DeckView',
                                {deck: item.item}
                            )}>
                            <Deck 
                                deckName={item.item.title} 
                                cardsNumber={item.item.questions.length !== 0 || item.item.questions.length !== 'undefined'
                                                ? item.item.questions.length + ' Cards'
                                                : 'No Cards'
                                            }
                            />
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.title}
                />
        </View>
        );
    }
}
const styles =StyleSheet.create({
    container :{
        flex: 1,
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: lightGray
    }

 })
function mapStateToProps(decks){
  return {
    decks,
  }
}


export default connect(mapStateToProps)(DeckList)

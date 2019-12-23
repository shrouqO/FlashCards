import { getDecks } from '../utils/api'
export const ADD_DECK ='ADD_DECK'
export const RECEIVE_DECKS ='RECIEVE_DECKS'
export const ADD_CARD_TO_DECK ='ADD_CARD_TO_DECK'
export const GET_DECK = 'GET_DECK'

export function receiveDecks () {
    return (dispatch) => {
        getDecks()
            .then((decks) => 
            dispatch({
                type: RECEIVE_DECKS,
                decks
            }))
}}

export function getDeck (title) {
    return {
        type: GET_DECK,
        title
    }
}

export function addDeck (title) {
    return {
        type: ADD_DECK,
        title
    }
}
export function addCard(title, card) {
    return {
        type: ADD_CARD_TO_DECK,
        title,
        card
    }
}

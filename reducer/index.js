import {GET_DECK,ADD_DECK ,RECEIVE_DECKS ,ADD_CARD_TO_DECK} from '../Actions/index'

 function deck (state ={},action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case GET_DECK:
            return action.title
            
            case ADD_DECK:
                return {
                    ...state,
                    [action.title]: {
                        title: action.title,
                        questions: []
                    }
                }
        case ADD_CARD_TO_DECK:
            return{
                ...state,
                [action.title]: {
                    ...state[action.title],
                    questions: [...state[action.title].questions, action.card]
                }
            }
        default:
            return state
    }
}

export default deck;
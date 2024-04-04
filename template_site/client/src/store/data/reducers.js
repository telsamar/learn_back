import { 
    SET_TEXT, 
    SET_MESSAGES,
} from './actions'

const defaultState = {
    mytext: 'Текст из state. Приступил к изменению сайта',
    messages: []
}

export const dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_TEXT:
            return {
                ...state,
                mytext: action.payload
            };
        case SET_MESSAGES:
            // console.log('Данные в SET_MESSAGES:', action.payload);
            return {
                ...state,
                messages: action.payload
            };
        default: return state
    }
}
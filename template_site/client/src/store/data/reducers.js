import { 
    SET_TEXT, 
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
            }

            
        default: return state
    }
}
    
    
    
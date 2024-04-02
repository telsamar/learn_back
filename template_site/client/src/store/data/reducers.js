import { SET_TEXT, } from './actions'


const defaultState = {
    mytext: 'text from state',
    messages: [
        // {
        //     id: 1,
        //     message: 'dmkdkfjkld'
        // }
    ]
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
    
    
    
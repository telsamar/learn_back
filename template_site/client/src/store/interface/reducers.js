import { 
    OPEN_INSERT_MODAL, 
    CLOSE_INSERT_MODAL,
    OPEN_EDIT_MODAL,
    CLOSE_EDIT_MODAL,
    SET_MESSAGE_TEXT,
    CLEAR_MESSAGE_TEXT
} from './actions'

export const initialInterfaceState = {
    insertModalOpen: false,
    editModalOpen: false,
    messageText: ''
};

export const interfaceReducer = (state = initialInterfaceState, action) => {
    switch (action.type) {
        case OPEN_INSERT_MODAL:
            return {
                ...state,
                insertModalOpen: true
            };
        case CLOSE_INSERT_MODAL:
            return {
                ...state,
                insertModalOpen: false
            };
        case OPEN_EDIT_MODAL:
            return {
                ...state,
                editModalOpen: true
            };
        case CLOSE_EDIT_MODAL:
            return {
                ...state,
                editModalOpen: false
            };
        case SET_MESSAGE_TEXT:
            return {
                ...state,
                messageText: action.payload
            };
        case CLEAR_MESSAGE_TEXT:
            return {
                ...state,
                messageText: ''
            };
        default:
            return state;
    }
};

export default interfaceReducer;

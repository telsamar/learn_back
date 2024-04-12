import { 
    OPEN_INSERT_MODAL, 
    CLOSE_INSERT_MODAL,
    OPEN_EDIT_MODAL,
    CLOSE_EDIT_MODAL
} from './actions'

const defaultState = {
    insertModalOpen: false,
    editModalOpen: false,
    editingId: null,
    editingMessage: ''
};

export const interfaceReducer = (state = defaultState, action) => {
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
                editModalOpen: true,
                editingId: action.payload.id,
                editingMessage: action.payload.message
            };
        case CLOSE_EDIT_MODAL:
            return {
                ...state,
                editModalOpen: false,
                editingId: null,
                editingMessage: ''
            };
        default:
            return state;
    }
};

export default interfaceReducer;

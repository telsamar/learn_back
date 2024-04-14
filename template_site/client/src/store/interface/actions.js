export const OPEN_INSERT_MODAL = 'OPEN_INSERT_MODAL';
export const CLOSE_INSERT_MODAL = 'CLOSE_INSERT_MODAL';
export const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL';
export const CLOSE_EDIT_MODAL = 'CLOSE_EDIT_MODAL';
export const SET_MESSAGE_TEXT = 'SET_MESSAGE_TEXT';
export const CLEAR_MESSAGE_TEXT = 'CLEAR_MESSAGE_TEXT';

export const act_openInsertModal = () => ({
  type: OPEN_INSERT_MODAL
});

export const act_closeInsertModal = () => ({
  type: CLOSE_INSERT_MODAL
});

export const act_openEditModal = () => ({
  type: OPEN_EDIT_MODAL
});

export const act_closeEditModal = () => ({
  type: CLOSE_EDIT_MODAL
});

export const act_setMessageText = (text) => ({
  type: SET_MESSAGE_TEXT,
  payload: text
});

export const act_clearMessageText = () => ({
  type: CLEAR_MESSAGE_TEXT
});

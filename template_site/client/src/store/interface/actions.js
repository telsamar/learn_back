export const OPEN_INSERT_MODAL = 'OPEN_INSERT_MODAL';
export const CLOSE_INSERT_MODAL = 'CLOSE_INSERT_MODAL';
export const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL';
export const CLOSE_EDIT_MODAL = 'CLOSE_EDIT_MODAL';

export const act_openInsertModal = () => ({ type: OPEN_INSERT_MODAL });
export const act_closeInsertModal = () => ({ type: CLOSE_INSERT_MODAL });
export const act_openEditModal = (id, message) => ({
  type: OPEN_EDIT_MODAL,
  payload: { id, message }
});
export const act_closeEditModal = () => ({ type: CLOSE_EDIT_MODAL });


import { createAction } from 'redux-act';

export const ACT_EDIT_LIST_TITLE = 'EDIT_LIST_TITLE';

export const EDIT_LIST_TITLE = createAction(ACT_EDIT_LIST_TITLE);

export const editListTitleAct = (title, id) => ({
  type: ACT_EDIT_LIST_TITLE,
  payload: { title, id },
});

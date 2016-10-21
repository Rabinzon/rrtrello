import { createAction } from 'redux-act';

export const ACT_REMOVE_LIST = 'REMOVE_LIST';

export const REMOVE_LIST = createAction(ACT_REMOVE_LIST);

export const removeListAct = id => ({
  type: ACT_REMOVE_LIST,
  payload: { id },
});

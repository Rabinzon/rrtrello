import { createAction } from 'redux-act';

export const ACT_ADD_LIST = 'ADD_LIST';

export const ADD_LIST = createAction(ACT_ADD_LIST);

export const addListAct = title => ({
  type: ACT_ADD_LIST,
  payload: { title },
});

import { createAction } from 'redux-act';

export const ACT_ADD_CARD = 'ADD_CARD';

export const ADD_CARD = createAction('ADD_CARD');

export const addCardAct = (title, id) => ({
  type: 'ADD_CARD',
  payload: { title, id },
});

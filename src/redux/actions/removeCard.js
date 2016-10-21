import { createAction } from 'redux-act';

export const ACT_REMOVE_CARD = 'REMOVE_CARD';

export const REMOVE_CARD = createAction(ACT_REMOVE_CARD);


export const removeCardAct = (listId, cardId) => ({
  type: ACT_REMOVE_CARD,
  payload: { listId, cardId },
});

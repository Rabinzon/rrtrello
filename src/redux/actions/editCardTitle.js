import { createAction } from 'redux-act';

export const ACT_EDIT_CARD_TITLE = 'EDIT_CARD_TITLE';

export const EDIT_CARD_TITLE = createAction(ACT_EDIT_CARD_TITLE);

export const editCardTitleAct = (title, listId, cardId) => ({
  type: ACT_EDIT_CARD_TITLE,
  payload: { title, listId, cardId },
});

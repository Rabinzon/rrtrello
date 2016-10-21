import { createReducer } from 'redux-act';
import initState from './initState';

import {
  ADD_CARD,
  ADD_LIST,
  EDIT_LIST_TITLE,
  REMOVE_LIST,
  REMOVE_CARD,
  EDIT_CARD_TITLE,
} from './actions/';

import {
  addList,
  addCard,
  editListTitle,
  removeList,
  removeCard,
  editCardTitle,
} from './modules';

const reducer = createReducer({
  [ADD_LIST]: addList,
  [ADD_CARD]: addCard,
  [EDIT_LIST_TITLE]: editListTitle,
  [REMOVE_LIST]: removeList,
  [REMOVE_CARD]: removeCard,
  [EDIT_CARD_TITLE]: editCardTitle,
}, initState);

export default reducer;

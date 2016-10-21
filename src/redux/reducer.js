import { createAction, createReducer } from 'redux-act';
import initState from './initState';
import {
  addList,
  addCard,
  editListTitle,
  removeList,
  removeCard,
  editCardTitle,
} from './modules';

const ADD_LIST = createAction('ADD_LIST');
const ADD_CARD = createAction('ADD_CARD');
const EDIT_LIST_TITLE = createAction('EDIT_LIST_TITLE');
const REMOVE_LIST = createAction('REMOVE_LIST');
const REMOVE_CARD = createAction('REMOVE_CARD');
const EDIT_CARD_TITLE = createAction('EDIT_CARD_TITLE');

const reducer = createReducer({
  [ADD_LIST]: addList,
  [ADD_CARD]: addCard,
  [EDIT_LIST_TITLE]: editListTitle,
  [REMOVE_LIST]: removeList,
  [REMOVE_CARD]: removeCard,
  [EDIT_CARD_TITLE]: editCardTitle,
}, initState);

export default reducer;

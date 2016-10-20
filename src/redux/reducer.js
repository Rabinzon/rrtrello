import initState from './initState';
import addList from './modules/addList';
import addCard from './modules/addCard';
import editListTitle from './modules/editListTitle';
import removeList from './modules/removeList';
import removeCard from './modules/removeCard';
import editCardTitle from './modules/editCardTitle';

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return addList(state, action);
    case 'ADD_CARD':
      return addCard(state, action);
    case 'EDIT_LIST_TITLE':
      return editListTitle(state, action);
    case 'REMOVE_LIST':
      return removeList(state, action);
    case 'REMOVE_CARD':
      return removeCard(state, action);
    case 'EDIT_CARD_TITLE':
      return editCardTitle(state, action);
    default :
      return state;
  }
};

export default reducer;

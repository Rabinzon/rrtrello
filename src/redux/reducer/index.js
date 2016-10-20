import uniqueid from '../../helpers/uniqueid';

const initState = {
  lists: [
    {
      id: 1,
      title: 'Some List',
      items: [
        {
          id: 1,
          title: 'some task',
          list: 1,
        },
        {
          id: 2,
          title: 'some task',
          list: 1,
        },
      ],
    },
  ],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return Object.assign({}, state, {
        lists: [...state.lists,
          {
            id: uniqueid(),
            title: action.payload.title,
            items: [],
          }],
      });
    case 'ADD_CARD':
      return Object.assign({}, state, {
        lists: state.lists.map((list) => {
          if (list.id === action.payload.id) {
            return Object.assign({}, list, {
              items: [...list.items, {
                id: uniqueid(),
                title: action.payload.title,
                list: list.id,
              }],
            });
          }
          return list;
        }),
      });
    case 'EDIT_LIST_TITLE':
      return Object.assign({}, state, {
        lists: state.lists.map((list) => {
          if (list.id === action.payload.id) {
            return Object.assign({}, list, { title: action.payload.title });
          }
          return list;
        }),
      });
    case 'REMOVE_LIST':
      return Object.assign({}, state, {
        lists: state.lists.filter((list) => {
          if (list.id === action.payload.id) {
            return false;
          }
          return true;
        }),
      });
    case 'REMOVE_CARD':
      return Object.assign({}, state, {
        lists: state.lists.map((list) => {
          if (list.id === action.payload.listId) {
            return Object.assign({}, list, {
              items: list.items.filter((card) => {
                console.log(card);
                return card.id !== action.payload.cardId;
              }),
            });
          }
          return list;
        }),
      });
    case 'EDIT_CARD_TITLE':
      console.log(action);
      return Object.assign({}, state, {
        lists: state.lists.map((list) => {
          if (list.id === action.payload.listId) {
            return Object.assign({}, list, {
              items: list.items.map((card) => {
                if (card.id === action.payload.cardId) {
                  return {
                    id: card.id,
                    title: action.payload.title,
                  };
                }
                return card;
              }),
            });
          }
          return list;
        }),
      });
    default :
      return state;
  }
};

export default reducer;

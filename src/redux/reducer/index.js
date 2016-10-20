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
        },
        {
          id: 2,
          title: 'some task',
        },
        {
          id: 3,
          title: 'some task',
        }],
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
    default :
      return state;
  }
};

export default reducer;

const initState = {
  lists: [
    {
      id: 1,
      title: 'Some List',
      items: [{
        id: 1,
        title: 'some task',
      }],
    },
  ],
};

const reducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_LIST':
      return Object.assign({}, state, {
        lists: [...state.lists,
          {
            id: 2,
            title: action.payload.title,
            items: [],
          }],
      });
    default :
      return state;
  }
};

export default reducer;

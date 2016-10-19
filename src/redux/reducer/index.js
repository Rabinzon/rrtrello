const reducer = (state = 'hello', action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return state;
    default :
      return state;
  }
};

export default reducer;

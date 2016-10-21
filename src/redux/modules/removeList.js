const removeList = (state, payload) => ({
  ...state,
  lists: state.lists.filter((list) => {
    if (list.id === payload.id) {
      return false;
    }
    return true;
  }),
});

export default removeList;

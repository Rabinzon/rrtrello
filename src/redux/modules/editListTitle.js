const findAndEditList = payload => (list) => {
  if (list.id === payload.id) {
    return {
      ...list,
      title: payload.title,
    };
  }
  return list;
};

const editListTitle = (state, { payload }) => ({
  ...state,
  lists: state.lists
    .map(findAndEditList(payload)),
});

export default editListTitle;

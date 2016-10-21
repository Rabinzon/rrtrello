const isEqual = ({ cardId }) => ({ id }) => id !== cardId;

const removeCard = (state, payload) => ({
  ...state,
  lists: state.lists.map((list) => {
    if (list.id === payload.listId) {
      return {
        ...list,
        items: list.items.filter(isEqual(payload)),
      };
    }
    return list;
  }),
});

export default removeCard;

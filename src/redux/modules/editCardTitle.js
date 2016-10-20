const editCard = payload => (card) => {
  if (card.id === payload.cardId) {
    return {
      id: card.id,
      title: payload.title,
    };
  }
  return card;
};

const findCardInLists = payload => (list) => {
  if (list.id === payload.listId) {
    return {
      ...list,
      items: list.items.map(editCard(payload)),
    };
  }
  return list;
};

const removeList = (state, { payload }) => ({
  ...state,
  lists: state.lists.map(findCardInLists(payload)),
});

export default removeList;

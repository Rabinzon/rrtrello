import uniqueid from '../../helpers/uniqueid';

const addCardToList = payload => (list) => {
  if (list.id === payload.id) {
    return {
      ...list,
      items: [...list.items, {
        id: uniqueid(),
        title: payload.title,
        list: list.id,
      }],
    };
  }
  return list;
};

const addCard = (state, payload) => ({
  ...state,
  lists: state.lists.map(addCardToList(payload)),
});

export default addCard;

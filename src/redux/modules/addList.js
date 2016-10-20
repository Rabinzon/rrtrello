import uniqueid from '../../helpers/uniqueid';

const AddList = (state, { payload }) => ({
  ...state,
  lists: [...state.lists, {
    id: uniqueid(),
    title: payload.title,
    items: [],
  }],
});

export default AddList;

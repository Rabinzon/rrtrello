import React from 'react';
import { connect } from 'react-redux';
import AddList from '../../components/AddList';
import List from '../../components/List';

class App extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    store: React.PropTypes.object,
  };

  addList = (title) => {
    this.props.dispatch({
      type: 'ADD_LIST',
      payload: { title },
    });
  };

  addCard = (title, id) => {
    this.props.dispatch({
      type: 'ADD_CARD',
      payload: { title, id },
    });
  };

  editCard = (title, listId, cardId) => {
    this.props.dispatch({
      type: 'EDIT_CARD_TITLE',
      payload: { title, listId, cardId },
    });
  };

  removeCard = (listId, cardId) => {
    this.props.dispatch({
      type: 'REMOVE_CARD',
      payload: { listId, cardId },
    });
  };

  editListTitle = (title, id) => {
    this.props.dispatch({
      type: 'EDIT_LIST_TITLE',
      payload: { title, id },
    });
  };

  removeList = (id) => {
    this.props.dispatch({
      type: 'REMOVE_LIST',
      payload: { id },
    });
  };

  render() {
    return (
      <div>
        <List
          lists={this.props.store.lists}
          submit={this.addCard}
          editListTitle={this.editListTitle}
          removeList={this.removeList}
          editCard={this.editCard}
          removeCard={this.removeCard}
        />
        <AddList submit={this.addList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => { // eslint-disable-line
  return { store: state };
};

export default connect(mapStateToProps)(App);

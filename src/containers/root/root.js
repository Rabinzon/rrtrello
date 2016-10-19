import React from 'react';
import { connect } from 'react-redux';
import AddList from '../../components/AddList';
import List from '../../components/List';

class App extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    store: React.PropTypes.object,
  };

  addList = title => (e) => {
    e.preventDefault();

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

  render() {
    return (
      <div>
        <List
          lists={this.props.store.lists}
          submit={this.addCard}
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

import React from 'react';
import { connect } from 'react-redux';
import AddList from '../../components/AddList';

class App extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
  };

  addList = title => (e) => {
    e.preventDefault();

    this.props.dispatch({
      type: 'ADD_LIST',
      payload: { title },
    });
  };

  render() {
    return (
      <AddList submit={this.addList} />
    );
  }
}

const mapStateToProps = (state) => { // eslint-disable-line
  return { store: state };
};

export default connect(mapStateToProps)(App);

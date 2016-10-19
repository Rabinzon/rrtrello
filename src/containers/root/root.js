import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  static propTypes = {
    store: React.PropTypes.string,
  };

  render() {
    const { store } = this.props;

    return (
      <h1>{store}</h1>
    );
  }
}

const mapStateToProps = (state) => { // eslint-disable-line
  return { store: state };
};

export default connect(mapStateToProps)(App);

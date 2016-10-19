import React from 'react';

class AddList extends React.Component {
  static propTypes = {
    submit: React.PropTypes.func,
  };

  state = {
    value: '',
  };

  handleChangeValue = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className='add-list'>
        <form onSubmit={this.props.submit(this.state.value)}>
          <input
            type='text'
            placeholder='add a list...'
            onChange={this.handleChangeValue}
            className='add-list__input'
          />
        </form>
      </div>
    );
  }
}

export default AddList;

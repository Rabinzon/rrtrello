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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submit(this.state.value);
    this.refs.addListInput.value = '';
  };

  render() {
    return (
      <div className='add-list'>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='add a list...'
            onChange={this.handleChangeValue}
            className='add-list__input'
            ref="addListInput"
          />
        </form>
      </div>
    );
  }
}

export default AddList;

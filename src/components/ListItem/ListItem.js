import React from 'react';
import Card from '../Card';

class ListItem extends React.Component {
  propTypes = {
    item: React.PropTypes.object,
    submit: React.PropTypes.func,
    editListTitle: React.PropTypes.func,
    removeList: React.PropTypes.func,
    editCard: React.PropTypes.func,
    removeCard: React.PropTypes.func,
  };

  state = {
    val: '',
    id: this.props.item.id,
    title: this.props.item.title,
    edit: false,
  };

  handleNewCard = (e) => {
    this.setState({ val: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { val, id } = this.state;
    this.props.submit(val, id);
  };

  handleEdit = (e) => {
    e.preventDefault();

    if (this.state.edit) {
      this.props.editListTitle(this.state.title, this.props.item.id);
    }
    this.setState(Object.assign({}, this.state, { edit: !this.state.edit }));
  };

  handleChange = (e) => {
    this.setState(Object.assign({}, this.state, { title: e.target.value }));
  };

  handleRemove = () => {
    this.props.removeList(this.props.item.id);
  };

  renderCards = (card, key) =>
    <Card
      card={card}
      key={key}
      editCard={this.props.editCard}
      removeCard={this.props.removeCard}
    />;

  render() {
    const { item } = this.props;
    const display = this.state.edit ? 'block' : 'none';

    return (
      <div className='list'>
        <div className='list__header'>
          <div className='list__title' >
            <a href='' className='list__title-text' onClick={this.handleEdit}>
              {item.title}
            </a>

            <div style={{ display }}>
              <form onSubmit={this.handleEdit}>
                <input
                  type='text'
                  className='list__header-input'
                  defaultValue={item.title}
                  onChange={this.handleChange}
                />
              </form>
              <button onClick={this.handleRemove}>X</button>
            </div>
          </div>
          <div className='list__header-cards'>
            {item.items.length} cards
          </div>
        </div>
        {item.items.map(this.renderCards)}
        <form className='list__add-card' onSubmit={this.handleSubmit}>
          <input
            className='list__add-card-input'
            type='text'
            placeholder='add card...'
            onChange={this.handleNewCard}
          />
        </form>
      </div>
    );
  }
}

export default ListItem;

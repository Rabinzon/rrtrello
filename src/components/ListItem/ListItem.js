import React from 'react';
import Card from '../Card';

class ListItem extends React.Component {
  propTypes = {
    item: React.PropTypes.object,
    submit: React.PropTypes.func,
  };

  state = {
    val: '',
    id: this.props.item.id,
  };

  handleNewCard = (e) => {
    this.setState({ val: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { val, id } = this.state;
    this.props.submit(val, id);
  };

  renderCards = (card, key) => <Card card={card} key={key} />;

  render() {
    const {
      item,
    } = this.props;

    return (
      <div className='list'>
        <div className='list__header'>
          {item.title}
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

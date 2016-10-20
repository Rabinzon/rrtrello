import React from 'react';

class Card extends React.Component {
  static propTypes = {
    card: React.PropTypes.object,
    editCard: React.PropTypes.func,
    removeCard: React.PropTypes.func,
  };

  state = {
    edit: false,
    val: this.props.card.title,
  };

  handleEdit = (e) => {
    e.preventDefault();

    this.changeStateEdit();
  };

  handleVal = (e) => {
    this.setState({
      ...this.state,
      val: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, list } = this.props.card;
    this.changeStateEdit();
    this.props.editCard(this.state.val, list, id);
  };

  handleRemoveCard = () => {
    const { id, list } = this.props.card;
    this.changeStateEdit();
    this.props.removeCard(list, id);
  };

  changeStateEdit = () => {
    this.setState({
      ...this.state,
      edit: !this.state.edit,
    });
  };

  render() {
    const { card } = this.props;
    const cardState = this.state.edit ? 'card_form' : '';

    return (
      <div className={cardState}>
        <a href='' className='card' onClick={this.handleEdit}>
          <p className='card__text'>
            {card.title}
          </p>
        </a>
        <div className='card-editor'>
          <form onSubmit={this.handleSubmit}>
            <textarea
              type='text'
              defaultValue={this.state.val}
              onChange={this.handleVal}
              className='card-editor__input'
            />
          </form>
          <button className='card__save' onClick={this.handleSubmit}>save</button>
          <button className='card__save' onClick={this.handleRemoveCard}>remove</button>
        </div>
      </div>
    );
  }
}

export default Card;

import React from 'react';

class Card extends React.Component {
  static propTypes = {
    card: React.PropTypes.object,
  };

  render() {
    const { card } = this.props;
    console.log(card);
    return (
      <div className='card'>
        {card.title}
      </div>
    );
  }
}

export default Card;

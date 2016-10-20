import React from 'react';

class Card extends React.Component {
  static propTypes = {
    card: React.PropTypes.object,
  };

  render() {
    const { card } = this.props;
    return (
      <div className='card'>
        {card.title}
      </div>
    );
  }
}

export default Card;

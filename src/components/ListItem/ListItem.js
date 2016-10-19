import React from 'react';
import Card from '../Card';

const renderCards = (card, key) => <Card card={card} key={key} />;

const ListItem = ({ item }) => { // eslint-disable-line
  return (
    <div className='list'>
      <div className='list__header'>
        {item.title}
        <div className='list__header-cards'>
          {item.items.length} cards
        </div>
      </div>
      {item.items.map(renderCards)}
    </div>
  );
};

ListItem.propTypes = {
  item: React.PropTypes.object,
};

export default ListItem;

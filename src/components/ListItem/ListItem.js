import React from 'react';

const ListItem = ({ item }) => { // eslint-disable-line
  return (
    <div className='list'>
      <div className='list__header'>
        {item.title}
        <div className='list__header-cards'>
          {item.items.length} cards
        </div>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  item: React.PropTypes.object,
};

export default ListItem;

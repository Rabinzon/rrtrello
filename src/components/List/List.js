import React from 'react';
import ListItem from '../ListItem';

class AddList extends React.Component {
  static propTypes = {
    lists: React.PropTypes.array,
  };

  renderLists = (item, key) =>
    <ListItem item={item} key={key} />;

  render() {
    const { lists } = this.props;
    return (
      <div className='list-container'>
        {lists.map(this.renderLists)}
      </div>
    );
  }
}

export default AddList;

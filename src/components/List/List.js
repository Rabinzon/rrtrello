import React from 'react';
import ListItem from '../ListItem';

class AddList extends React.Component {
  static propTypes = {
    lists: React.PropTypes.array,
    submit: React.PropTypes.func,
    editListTitle: React.PropTypes.func,
  };

  renderLists = (item, key) =>
    <ListItem
      item={item}
      key={key}
      submit={this.props.submit}
      editListTitle={this.props.editListTitle}
    />;

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

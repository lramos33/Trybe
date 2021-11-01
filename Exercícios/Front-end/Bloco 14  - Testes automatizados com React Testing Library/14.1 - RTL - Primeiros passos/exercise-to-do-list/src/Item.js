import React from 'react';
import PropTypes from 'prop-types'

function Item(props) {
  const { content, clickTaskCallback } = props
  return (
    <div className="Item" onClick={ () => clickTaskCallback(content) }>
      { content }
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
  clickTaskCallback: PropTypes.func.isRequired,
}

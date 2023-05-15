import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Item from '../Item/Item';

function Listing(props) {
  const { items } = props;
  return (
    <div className='item-list'>
      {
        items.map((o) => <Item data={o} key={shortid.generate()}/>)
      }
    </div>
  );
}

export default Listing;

Listing.propTypes = {
  items: PropTypes.array.isRequired,
}
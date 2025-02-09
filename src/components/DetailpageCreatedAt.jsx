import React from 'react';
import { formatDate } from '../utils/local-data';
import PropTypes from 'prop-types';

function DetailpageCreatedAt({ createdAt }) {
  return <p className='detail-page__createdAt'>{formatDate(createdAt)}</p>;
}

DetailpageCreatedAt.propTypes = {
  createdAt: PropTypes.string.isRequired
};


export default DetailpageCreatedAt;
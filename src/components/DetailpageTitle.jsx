import React from 'react';
import PropTypes from 'prop-types';

function DetailpageTitle({ title }) {
  return <h3 className='detail-page__title'>{title}</h3>;
}

DetailpageTitle.propTypes = {
  title: PropTypes.string.isRequired
};


export default DetailpageTitle;
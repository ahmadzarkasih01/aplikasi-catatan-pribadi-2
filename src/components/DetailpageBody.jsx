import React from 'react';
import PropTypes from 'prop-types';


function DetailpageBody({ body }) {
  return <div className='detail-page__body'>{body}</div>;
}

DetailpageBody.propTypes = {
  body: PropTypes.string.isRequired
};


export default DetailpageBody;
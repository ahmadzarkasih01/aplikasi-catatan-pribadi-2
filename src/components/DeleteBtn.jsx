import React from 'react';
import PropTypes from 'prop-types';

function DeleteBtn({ id, onDelete }) {
  return (
    <button className="action" type="button" title="Hapus" onClick={() => onDelete?.(id)}>
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"></path>
      </svg>
    </button>
  );
}

DeleteBtn.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default DeleteBtn;

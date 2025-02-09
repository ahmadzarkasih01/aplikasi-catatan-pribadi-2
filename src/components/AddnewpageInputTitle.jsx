import React from 'react';
import PropTypes from 'prop-types';

function AddnewpageInputTitle({ value, onChange }) {
  return (
    <input
      className="add-new-page__input__title"
      type="text"
      placeholder="Judul Catatan"
      value={value}
      onChange={onChange}
    />
  );
}

AddnewpageInputTitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default AddnewpageInputTitle;
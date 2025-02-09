import React from 'react';
import PropTypes from 'prop-types';

function AddnewpageInputBody({ onChange }) {
  return (
    <div
      className="add-new-page__input__body"
      data-placeholder="Deskripsi Catatan"
      contentEditable
      suppressContentEditableWarning
      onInput={(event) => {
        const value = event.target.innerHTML;
        onChange(value);
      }}
    />
  );
}

AddnewpageInputBody.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default AddnewpageInputBody;

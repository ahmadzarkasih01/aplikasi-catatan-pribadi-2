import React from "react";

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

export default AddnewpageInputTitle;
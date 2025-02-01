import React from "react";

function AddnewpageInputBody({ body, onChange }) {
  return <div className="add-new-page__input__body" data-placeholder="Deskripsi Catatan" contentEditable="true" onInput={onChange}>{body}</div>;
}

export default AddnewpageInputBody;

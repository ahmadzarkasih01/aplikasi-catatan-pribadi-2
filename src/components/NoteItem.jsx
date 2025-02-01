import React from "react";
import parser from 'html-react-parser';

function NoteItem({ title, createdAt, body }) {
  return (
    <article className="note-item">
      <h3 className="note-item__title">
        <a>{title}</a>
      </h3>
      <p className="note-item__createdAt">{createdAt}</p>
      <p className="note-item__body">{body ? parser(body) : "Tidak ada konten"}</p>
    </article>
  );
}

export default NoteItem;

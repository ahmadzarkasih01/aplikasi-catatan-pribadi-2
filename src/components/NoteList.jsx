import React from 'react';
import NoteItem from './NoteItem';
import EmptyList from './EmptyList';
import PropTypes from 'prop-types';

function NoteList({ notes }) {
  return (
    <section className={notes.length > 0 ? 'notes-list' : 'notes-list-empty'}>
      {notes.length > 0 ? (
        notes.map((note) => <NoteItem key={note.id} {...note} />)
      ) : (
        <EmptyList />
      )}
    </section>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      body: PropTypes.string
    })
  ).isRequired
};

export default NoteList;

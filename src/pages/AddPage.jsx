import React, { useState } from 'react';
import AddnewpageInput from '../components/AddnewpageInput';
import AddnewpageAction from '../components/AddnewpageAction';
import { addNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';

function AddPage() {
  const navigate = useNavigate();
  const [note, setNote] = useState({ title: '', body: '' });

  const onAddNoteHandler = () => {
    addNote(note);
    navigate('/');
  };

  const onNoteChangeHandler = (newNote) => {
    setNote(newNote);
  };

  return (
    <section className="add-new-page">
      <AddnewpageInput onNoteChange={onNoteChangeHandler} />
      <AddnewpageAction addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
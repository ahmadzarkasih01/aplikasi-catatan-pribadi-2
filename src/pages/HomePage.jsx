import React from 'react';
import NoteList from '../components/NoteList';
import { getActiveNotes } from '../utils/local-data';
import HomepageAction from '../components/HomepageAction';

function HomePage() {
 const notes = getActiveNotes();

 return (
  <section className='homepage'>
    <h2>Catatan Aktif</h2>
    <NoteList notes={notes} />
    <HomepageAction/>
  </section>
 );
}

export default HomePage;
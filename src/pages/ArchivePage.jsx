import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import { getArchivedNotes } from '../utils/local-data';
import SearchBar from '../components/SearchBar';

function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes] = useState(getArchivedNotes());
  const keyword = searchParams.get('keyword') || '';

  useEffect(() => {
    if (keyword) {
      setSearchParams({ keyword });
    } else {
      setSearchParams({});
    }
  }, [keyword, setSearchParams]);

  function onKeywordChangeHandler(keyword) {
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <section className="archive-page">
      <h2>Catatan Arsip</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NoteList notes={filteredNotes} />
    </section>
  );
}

export default ArchivePage;

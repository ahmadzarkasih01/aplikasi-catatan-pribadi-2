import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import { getActiveNotes } from '../utils/local-data';
import HomepageAction from '../components/HomepageAction';
import SearchBar from '../components/SearchBar';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes] = useState(getActiveNotes());
  const keyword = searchParams.get('keyword') || '';

  useEffect(() => {
    if (keyword) {
      setSearchParams({ keyword });
    } else {
      setSearchParams({});
    }
  }, [keyword, setSearchParams]);

  function onKeywordChangeHandler(keyword) {
    setSearchParams(keyword ? { keyword } : {});
  }

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NoteList notes={filteredNotes} />
      <HomepageAction />
    </section>
  );
}

export default HomePage;

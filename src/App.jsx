import React from 'react';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>
          <a href="/">Aplikasi Catatan</a>
        </h1>
        <Navigation/>
      </header>
      <main>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/new" element={<AddPage />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;

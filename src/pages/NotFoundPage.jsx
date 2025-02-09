import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <h2>404 - Halaman Tidak Ditemukan</h2>
      <p>Maaf, halaman yang kamu cari tidak tersedia.</p>
      <Link to="/" className="home-link">
        Kembali ke Beranda
      </Link>
    </section>
  );
}

export default NotFoundPage;

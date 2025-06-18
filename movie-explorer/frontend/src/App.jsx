import React, { useState } from 'react';
import MovieCard from './components/MovieCard';

export default function App() {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const fetchMovie = async () => {
    if (!query.trim()) return;

    try {
      const res = await fetch(`http://localhost:5001/api/movie?title=${encodeURIComponent(query)}`);
      const data = await res.json();
      if (res.ok) {
        setMovie(data);
        setError(null);
      } else {
        setMovie(null);
        setError(data.error);
      }
    } catch (err) {
      setMovie(null);
      setError("Failed to fetch movie.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') fetchMovie();
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif', color: '#fff', backgroundColor: '#111', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ color: '#facc15' }}>🎬 Movie Explorer</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search movie title..."
        style={{
          padding: '0.75rem',
          width: '300px',
          fontSize: '1rem',
          borderRadius: '999px',
          border: '1px solid #555',
          marginTop: '1rem',
          outline: 'none'
        }}
      />
      <br />
      <button
        onClick={fetchMovie}
        style={{
          marginTop: '1rem',
          padding: '0.6rem 1.5rem',
          borderRadius: '999px',
          border: 'none',
          backgroundColor: '#facc15',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        Search
      </button>

      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
      {movie && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <MovieCard movie={movie} />
        </div>
      )}
    </div>
  );
}
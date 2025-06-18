import React from "react";

export default function MovieCard({ movie }) {
    return (
        <div
            style={{
                marginTop: '2.5rem',
                background: '#1a1a1a',
                padding: '2rem',
                borderRadius: '1rem',
                maxWidth: '900px',
                width: '100%',
                marginInline: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
                color: '#f4f4f4',
                boxShadow: '0 0 25px rgba(250, 204, 21, 0.2)'
            }}
        >
            <img
                src={movie.Poster}
                alt={movie.Title}
                style={{
                    borderRadius: '8px',
                    width: '100%',
                    maxWidth: '300px',
                    objectFit: 'cover'
                }}
            />

            <div style={{ textAlign: 'center', maxWidth: '600px' }}>
                <h2 style={{
                    color: '#facc15',
                    marginBottom: '0.5rem'
                }}>
                    {movie.Title} ({movie.Year})
                </h2>
                <p style={{ fontStyle: 'italic', color: '#ccc' }}>Released on: {movie.Released}</p>
                <p style={{ fontStyle: 'italic', color: '#ccc' }}>{movie.Genre}</p>

                <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>{movie.Plot}</p>

                <p><strong>🎬 Director:</strong> {movie.Director}</p>
                <p><strong>🎭 Actors:</strong> {movie.Actors}</p>

                <p style={{
                    marginTop: '1rem',
                    background: '#333',
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    borderRadius: '999px',
                    fontWeight: 'bold',
                    color: '#facc15'
                }}>
                    ⭐ IMDB: {movie.imdbRating}
                </p>
            </div>
        </div>
    );
}
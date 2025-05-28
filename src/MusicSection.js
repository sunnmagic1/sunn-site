import React from 'react';

export default function MusicSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 20px',
        backgroundColor: '#fff',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>
        🎧 Listen to Sunn
      </h2>

      <p style={{ color: '#555', marginBottom: '25px', maxWidth: '500px' }}>
        My sound is raw, rich, and real. Press play and get a taste.
      </p>

      <div
        style={{
          width: '300px',
          height: '152px',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        }}
      >
        <iframe
          title="Spotify player for Sunn"
          src="https://open.spotify.com/embed/artist/4FrtPAEz1FZZ2xlY46hm7e?utm_source=generator"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ border: 'none' }}
        ></iframe>
      </div>

      <a
        href="https://open.spotify.com/artist/4FrtPAEz1FZZ2xlY46hm7e"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: '30px',
          padding: '12px 24px',
          backgroundColor: '#000',
          color: '#fff',
          borderRadius: '30px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#333')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#000')}
      >
        🔥 More on Spotify
      </a>
    </section>
  );
}
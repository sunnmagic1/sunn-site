import React from 'react';

export default function MusicSection() {
  return (
    <section className="p-6 text-center bg-white">
      <h2 className="text-3xl font-bold mb-2">🎧 Listen to Sunn</h2>
      <p className="mb-4 text-gray-600">Music straight from the soul. Hit play and explore my sound.</p>

      <div className="max-w-xl mx-auto">
        <iframe
          title="Spotify player for Sunn"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/artist/4FrtPAEz1FZZ2xlY46hm7e?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      <a
        href="https://open.spotify.com/artist/4FrtPAEz1FZZ2xlY46hm7e"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
      >
        🔥 Listen on Spotify
      </a>
    </section>
  );
}
import React, { useEffect, useState } from "react";

export default function MusicSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "100vh",
        padding: "40px 20px",
        textAlign: "center",
        color: "#ffffff",
        opacity: visible ? 1 : 0,
        transition: "opacity 1s ease-in-out",
        backgroundColor: "transparent",
        overflowY: "auto",
        gap: "40px",
      }}
    >
      {/* 💫 Stream Everywhere Bar */}
      <div
        style={{
          padding: "8px 16px",
          borderRadius: "999px",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(6px)",
          fontSize: "0.9rem",
          fontWeight: "500",
          letterSpacing: "0.5px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        🚀 Stream Everywhere
      </div>

      {/* 🎵 Spotify Embed */}
      <div
        style={{
          width: "300px",
          height: "152px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
          backdropFilter: "blur(6px)",
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
          style={{ border: "none" }}
        ></iframe>
      </div>

      {/* 🔗 Spotify Button */}
      <a
        href="https://open.spotify.com/artist/4FrtPAEz1FZZ2xlY46hm7e"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: "12px 24px",
          backgroundColor: "#000000bb",
          color: "#fff",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#333")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#000000bb")}
      >
        🔥 More on Spotify
      </a>

      {/* 🍎 Apple Music Badge */}
      <a
        href="https://music.apple.com/us/artist/sunn-magic/1735783723?itscg=30200&itsct=music_box_appicon&ls=1&app=music&mttnsubad=1735783723"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
        }}
      >
        <img
          src="https://toolbox.marketingtools.apple.com/api/v2/badges/app-icon-music/standard/en-us"
          alt="Apple Music app icon"
          style={{
            width: "100px",
            height: "100px",
            objectFit: "contain",
          }}
        />
      </a>

      {/* 🎥 YouTube Embed (Vamps video) */}
      <div
        style={{
          width: "100%",
          maxWidth: "560px",
          aspectRatio: "16 / 9",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
        }}
      >
        <iframe
          title="Vamps Music Video"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/uAS1_IsPncc"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ border: "none" }}
        ></iframe>
      </div>
    </section>
  );
}
import React from "react";
import Spline from "@splinetool/react-spline";
import MusicSection from "./MusicSection";

function App() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      {/* 🌌 Background Animation */}
      <Spline
        scene="https://prod.spline.design/qXcd22ZmbHMd8ebR/scene.splinecode"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      {/* 🎧 Music Section overlayed on top */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <MusicSection />
      </div>
    </div>
  );
}

export default App;
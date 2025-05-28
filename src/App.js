import React from "react";
import Spline from "@splinetool/react-spline";
import MusicSection from "./MusicSection";

function App() {
  return (
    <div>
      {/* 🔮 Full-screen Spline animation at the top */}
      <div style={{ width: "100vw", height: "100vh" }}>
        <Spline scene="https://prod.spline.design/qXcd22ZmbHMd8ebR/scene.splinecode" />
      </div>

      {/* 🎧 Music section right after the Spline scene */}
      <MusicSection />
    </div>
  );
}

export default App;
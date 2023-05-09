import "./App.css";
import React from "react";
import Rutas from "./routes/Rutas.jsx";
import Music from "./components/Music";
function App() {
  return (
    <div className="App">
      <Rutas />
      <Music />
    </div>
  );
}

export default App;

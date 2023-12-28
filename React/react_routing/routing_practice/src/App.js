import {Routes, Route} from "react-router-dom";
import './App.css';
import React from "react";
import Home from "./components/home";
import Options from "./components/options";

function App() {
    return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:entry" element={<Options/>}/>
        <Route path="/:entry/:color/:bgColor" element={<Options/>}/>
      </Routes>
    </div>
  );
}

export default App;

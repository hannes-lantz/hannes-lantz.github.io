import React from "react";
import logo from "./HL.jpg";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
    <Navbar />
    <Main />
    <Routes>
      <Route path="/test" element={<Main />} />
    </Routes>
  </div>
  );
}

export default App;

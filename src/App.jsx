import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import "./App.css";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;

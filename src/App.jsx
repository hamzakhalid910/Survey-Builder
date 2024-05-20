import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import "./App.css";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import { User } from "./Separate Components/User";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/user" element={<User />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;

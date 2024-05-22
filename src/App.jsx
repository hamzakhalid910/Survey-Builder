import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import "./App.css";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import { User } from "./Separate Components/User";
import Header from "./Components/Header";
import Dashboard from "./Pages/Dashboard";
import CreateSurvey from "./Pages/CreateSurvey";
<<<<<<< HEAD
import BuildSurveyWithAi from "./Pages/BuildSurveyWithAi";
=======
import SurveyDashboard from "./Pages/SurveyDashboard";
>>>>>>> ec6f4821ea4eb94aa554d5ae9d0e3921ca2df0e8

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/user" element={<User />} />
        <Route path="/header" element={<Header />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createsurvey" element={<CreateSurvey />}></Route>
<<<<<<< HEAD
        <Route path="/buildSurveyWithAI" element={<BuildSurveyWithAi />}></Route>
=======
        <Route path="/surveydashboard" element={<SurveyDashboard/>}></Route>
>>>>>>> ec6f4821ea4eb94aa554d5ae9d0e3921ca2df0e8
      </Routes>
    </Router>
  );
}

export default App;

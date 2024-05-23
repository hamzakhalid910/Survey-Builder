import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import "./App.css";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import { User } from "./Separate Components/User";
import Header from "./Components/Common/Header/index";
import Dashboard from "./Pages/Dashboard";
import CreateSurvey from "./Pages/CreateSurvey";
import BuildSurveyWithAi from "./Pages/BuildSurveyWithAi";
import SurveyDashboard from "./Pages/SurveyDashboard";
import MySurveys from "./Pages/MySurveys";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/user" element={<User />} />
        <Route path="/header" element={<Header />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mysurveys" element={<MySurveys />}></Route>
        <Route path="/createsurvey" element={<CreateSurvey />}></Route>
        <Route path="/surveydashboard" element={<SurveyDashboard />}></Route>
        <Route
          path="/buildSurveyWithAI"
          element={<BuildSurveyWithAi />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;

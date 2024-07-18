import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import "./App.css";

import {
  SignUp,
  SignIn,
  Dashboard,
  CreateSurvey,
  BuildSurveyWithAi,
  SurveyDashboard,
  MySurveys,
  Dnd,
  QuickTemplates,
} from "./Pages";
// import { Header, User } from "./Components";

function App() {
  const [listGrid, setListGrid] = useState("Grid");

  const updateListGrid = (view) => {
    setListGrid(view);
  };

  console.log(listGrid);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        {/* <Route path="/user" element={<User />} /> */}
        {/* <Route path="/header" element={<Header />} /> */}
        <Route
          path="/dashboard"
          element={
            <Dashboard updateListGrid={updateListGrid} listGrid={listGrid} />
          }
        />
        <Route path="/mysurveys" element={<MySurveys />}></Route>
        <Route path="/createsurvey" element={<CreateSurvey />}></Route>
        <Route path="/surveydashboard" element={<SurveyDashboard />}></Route>
        <Route path="/buildsurveywithai" element={<BuildSurveyWithAi />} />
        <Route path="/Dnd" element={<Dnd />}></Route>
        <Route
          path="/quicktemplates"
          element={
            <QuickTemplates
              updateListGrid={updateListGrid}
              listGrid={listGrid}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
// dependencies
import { HashRouter as Router, Route, Routes } from "react-router-dom";
// components
import BaseLayout from "./components/Baselayout";
import Main from "./screens/Main";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Record from "./screens/Record";
import Status from "./screens/Status";
import Result from "./screens/Status/Result";

function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/record" element={<Record />} />
          <Route path="/status" element={<Status />} />
          <Route path="/status/result" element={<Result />} />
        </Routes>
      </BaseLayout>
    </Router>
  );
}

export default App;

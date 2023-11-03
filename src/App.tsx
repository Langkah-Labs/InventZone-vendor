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
import ForgotPassword from "./screens/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/record"
            element={
              <ProtectedRoute>
                <Record />
              </ProtectedRoute>
            }
          />
          <Route
            path="/status"
            element={
              <ProtectedRoute>
                <Status />
              </ProtectedRoute>
            }
          />
          <Route
            path="/status/result"
            element={
              <ProtectedRoute>
                <Result />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BaseLayout>
    </Router>
  );
}

export default App;

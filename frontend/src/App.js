import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthScreen from "./components/AuthScreen";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import AddFile from "./components/AddFile";

function App() {
  // Simulazione autenticazione (da sostituire con la tua logica)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Dashboard />
            ) : (
              <AuthScreen setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route
          path="/settings"
          element={
            isAuthenticated ? (
              <Settings />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/add-file"
          element={
            isAuthenticated ? (
              <AddFile />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
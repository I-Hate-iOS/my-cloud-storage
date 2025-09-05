import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthScreen from "./components/AuthScreen";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import AddFile from "./components/AddFile";

function App() {
  //const isAuthenticated = /* logica per verificare il login */;

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <AuthScreen />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/settings" element={isAuthenticated ? <Settings /> : <Navigate to="/" />} />
        <Route path="/add-file" element={isAuthenticated ? <AddFile /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
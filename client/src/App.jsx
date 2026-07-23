import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DSA from "./pages/DSA";
import Aptitude from "./pages/Aptitude";
import Words from "./pages/Words";
import Notes from "./pages/Notes";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";




function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dsa" element={<DSA />} />
      <Route path="/aptitude" element={<Aptitude />} />
      <Route path="/words" element={<Words />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
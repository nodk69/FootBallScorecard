import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MatchDetails from "./components/MatchDetails";
import AddMatch from "./pages/AddMatch";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/match/:matchId" element={<MatchDetails />} />
      <Route path="/add" element={<AddMatch />} />
    </Routes>
  </Router>
);

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from "./packages/blocks/Home/portfolio"

function App() {
  return (
    <Router basename='tryelPortfolio'>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import WatchMovie from "./pages/WatchMovie";
import { ROUTES } from "./constants";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={`${ROUTES.WATCH}/:movieId`} element={<WatchMovie />} />
      </Routes>
    </Router>
  );
};

export default App;

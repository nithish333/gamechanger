import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import ManageTeams from "./ManageTeams/ManageTeams";
import ViewTeam from "./ViewTeam/ViewTeam";
import AboutAthlete from "./AboutAthlete/AboutAthlete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/manageteams" element={<ManageTeams />} />
        <Route path="/dashboard/manageteams/viewteam" element={<ViewTeam />} />
        <Route
          path="/dashboard/manageteams/viewteam/dashboard"
          element={<AboutAthlete />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

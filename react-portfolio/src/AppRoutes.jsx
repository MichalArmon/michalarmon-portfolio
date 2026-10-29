import { Routes, Route } from "react-router-dom";
import App from "./App";
import Landing01 from "./landingPages/landing01/Landing01";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/landing-pages/landing01" element={<Landing01 />} />
    </Routes>
  );
}

export default AppRoutes;

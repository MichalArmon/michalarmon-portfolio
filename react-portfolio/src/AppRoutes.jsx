import { Routes, Route } from "react-router-dom";
import App from "./App";
import Landing01 from "./landingPages/landing01/Landing01";
import Landing02 from "./landingPages/landing02/Landing02";
import Landing03 from "./landingPages/landing03/Landing03";
import Landing04 from "./landingPages/landing04/Landing04";

Landing03;

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/landing-pages/landing01" element={<Landing01 />} />
      <Route path="/landing-pages/landing02" element={<Landing02 />} />
      <Route path="/landing-pages/landing03" element={<Landing03 />} />
      <Route path="/landing-pages/landing04" element={<Landing04 />} />
    </Routes>
  );
}

export default AppRoutes;

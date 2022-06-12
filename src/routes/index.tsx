import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Certificates from "../pages/Certificates";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;

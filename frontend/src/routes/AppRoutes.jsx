import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import DealerLogin from "../pages/auth/DealerLogin";
import DealerRegister from "../pages/auth/DealerRegister";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dealer/login" element={<DealerLogin />} />
      <Route path="/dealer/register" element={<DealerRegister />} />
    </Routes>
  );
}
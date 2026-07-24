import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import DealerLogin from "../pages/auth/DealerLogin";
import DealerRegister from "../pages/auth/DealerRegister";
import Dashboard from "../pages/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dealer/login" element={<DealerLogin />} />
      <Route path="/dealer/register" element={<DealerRegister />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
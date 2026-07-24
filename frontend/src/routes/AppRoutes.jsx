import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import DealerLogin from "../pages/auth/DealerLogin";
import DealerRegister from "../pages/auth/DealerRegister";

import Dashboard from "../pages/Dashboard";
import Trucks from "../pages/Trucks";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Landing */}
      <Route path="/" element={<Landing />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dealer/login" element={<DealerLogin />} />
      <Route path="/dealer/register" element={<DealerRegister />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Truck Management */}
      <Route path="/trucks" element={<Trucks />} />
    </Routes>
  );
}
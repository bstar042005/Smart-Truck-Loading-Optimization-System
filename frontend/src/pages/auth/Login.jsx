import { useState } from "react";
import { Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AuthLayout from "../../components/auth/AuthLayout";
import InputField from "../../components/forms/InputField";
import PasswordField from "../../components/forms/PasswordField";
import PrimaryButton from "../../components/forms/PrimaryButton";
import Checkbox from "../../components/forms/Checkbox";

import api from "../../services/api";
import { saveUser } from "../../utils/storage";

export default function Login() {
  const navigate = useNavigate();

  const [remember, setRemember] = useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/users/login", form);

      if (res.data.success) {
        saveUser(res.data.user);

        toast.success(res.data.message);

        navigate("/dashboard");
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue using SmartLoad."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          label="Email Address"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          icon={Mail}
        />

        <PasswordField
          label="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        <div className="flex items-center justify-between">
          <Checkbox
            label="Remember Me"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />

          <button
            type="button"
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            Forgot Password?
          </button>
        </div>

        <PrimaryButton loading={loading} type="submit">
          Sign In
        </PrimaryButton>

        <p className="text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-400 hover:text-blue-300"
          >
            Register
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
import { useState } from "react";
import { Mail, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AuthLayout from "../../components/auth/AuthLayout";
import InputField from "../../components/forms/InputField";
import PasswordField from "../../components/forms/PasswordField";
import PrimaryButton from "../../components/forms/PrimaryButton";
import Checkbox from "../../components/forms/Checkbox";

import api from "../../services/api";

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = form;

    if (!name || !email || !password || !confirmPassword) {
      return toast.error("Please fill all fields.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return toast.error("Please enter a valid email.");
    }

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters.");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match.");
    }

    if (!agree) {
      return toast.error("Please accept the Terms & Conditions.");
    }

    try {
      setLoading(true);

      const res = await api.post("/users/register", {
        name,
        email,
        password,
      });

      if (res.data.success) {
        toast.success(res.data.message);

        navigate("/login");
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join SmartLoad and optimize your shipments."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <InputField
          label="Full Name"
          name="name"
          placeholder="Enter your full name"
          value={form.name}
          onChange={handleChange}
          icon={User}
        />

        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          icon={Mail}
        />

        <PasswordField
          label="Password"
          name="password"
          placeholder="Create a password"
          value={form.password}
          onChange={handleChange}
        />

        <PasswordField
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <Checkbox
          label="I agree to the Terms & Conditions"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />

        <PrimaryButton loading={loading} type="submit">
          Create Account
        </PrimaryButton>

        <p className="text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-blue-400 hover:text-blue-300"
          >
            Sign In
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
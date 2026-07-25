import { useState } from "react";
import { Building2, User, Mail, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AuthLayout from "../../components/auth/AuthLayout";
import InputField from "../../components/forms/InputField";
import PasswordField from "../../components/forms/PasswordField";
import PrimaryButton from "../../components/forms/PrimaryButton";
import Checkbox from "../../components/forms/Checkbox";

import api from "../../services/api";

export default function DealerRegister() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);

  const [form, setForm] = useState({
    companyName: "",
    dealerName: "",
    email: "",
    phone: "",
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

    const {
      companyName,
      dealerName,
      email,
      phone,
      password,
      confirmPassword,
    } = form;

    if (
      !companyName ||
      !dealerName ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return toast.error("Please fill all required fields.");
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

      const res = await api.post("/dealers/register", {
        companyName,
        dealerName,
        email,
        phone,
        password,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/dealer/login");
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
      title="Dealer Registration"
      subtitle="Create your dealer account to manage trucks and shipments."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <InputField
          label="Company Name"
          name="companyName"
          placeholder="Enter company name"
          value={form.companyName}
          onChange={handleChange}
          icon={Building2}
        />

        <InputField
          label="Dealer Name"
          name="dealerName"
          placeholder="Enter dealer name"
          value={form.dealerName}
          onChange={handleChange}
          icon={User}
        />

        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
          icon={Mail}
        />

        <InputField
          label="Phone Number"
          name="phone"
          placeholder="Enter phone number"
          value={form.phone}
          onChange={handleChange}
          icon={Phone}
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
          placeholder="Confirm password"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <Checkbox
          label="I agree to the Terms & Conditions"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />

        <PrimaryButton loading={loading} type="submit">
          Create Dealer Account
        </PrimaryButton>

        <p className="text-center text-sm text-slate-400">
          Already have a dealer account?{" "}
          <Link
            to="/dealer/login"
            className="font-medium text-blue-400 hover:text-blue-300"
          >
            Sign In
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
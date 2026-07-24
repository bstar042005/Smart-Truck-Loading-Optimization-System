import { useState } from "react";
import { Mail } from "lucide-react";

import AuthLayout from "../../components/auth/AuthLayout";
import InputField from "../../components/forms/InputField";
import PasswordField from "../../components/forms/PasswordField";
import PrimaryButton from "../../components/forms/PrimaryButton";
import Checkbox from "../../components/forms/Checkbox";

export default function Login() {
  const [remember, setRemember] = useState(false);

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue using SmartLoad."
    >
      <form className="space-y-6">
        <InputField
          label="Email Address"
          placeholder="Enter your email"
          icon={Mail}
        />

        <PasswordField
          label="Password"
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
            className="text-sm text-blue-400 transition hover:text-blue-300"
          >
            Forgot Password?
          </button>
        </div>

        <PrimaryButton type="submit">
          Sign In
        </PrimaryButton>

        <p className="text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-medium text-blue-400 hover:text-blue-300"
          >
            Register
          </a>
        </p>
      </form>
    </AuthLayout>
  );
}
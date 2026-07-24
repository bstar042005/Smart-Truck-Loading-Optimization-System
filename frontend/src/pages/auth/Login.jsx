import { Mail } from "lucide-react";
import AuthLayout from "../../components/auth/AuthLayout";
import InputField from "../../components/forms/InputField";
import PasswordField from "../../components/forms/PasswordField";

export default function Login() {
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
      </form>
    </AuthLayout>
  );
}
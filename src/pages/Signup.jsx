
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Eye icon component
function EyeIcon({ visible }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
      {!visible && <path d="M3 3l18 18" />}
    </svg>
  );
}

export default function Signup() {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [AcType, setActype] = useState("");
  const [AdminRef, setAdminRef] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showAdminRef, setShowAdminRef] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    console.log("Create Account form submitted!");

    if (!AcType) {
      alert("Please select an account type!");
      return;
    }

    if (AcType === "admin" && !AdminRef.trim()) {
      alert("Please enter your Admin Reference!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Admin references must be verified by the backend.
    // Your current backend does not support this yet.
    if (AcType === "admin") {
      alert(
        "Admin registration is not configured yet. " +
        "An administrator must verify your reference."
      );
      return;
    }

  
  }

  return (
    <div className="min-h-screen bg-[#637aac] flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">

        <p className="text-sm text-gray-400 mb-2">
          Please enter your details
        </p>

        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Create an account
        </h1>

        <form onSubmit={handleSubmit}>

          {/* First Name */}
          <input
            type="text"
            placeholder="First name"
            value={firstname}
            onChange={(event) => {
              setFirstname(event.target.value);
              console.log("First name:", event.target.value);
            }}
            required
            className="w-full border border-gray-300 rounded-md p-3 mb-4 outline-none focus:border-blue-500"
          />

          {/* Last Name */}
          <input
            type="text"
            placeholder="Last name"
            value={Lastname}
            onChange={(event) => {
              setLastname(event.target.value);
              console.log("Last name:", event.target.value);
            }}
            required
            className="w-full border border-gray-300 rounded-md p-3 mb-4 outline-none focus:border-blue-500"
          />

          {/* Account Type Dropdown */}
          <select
            value={AcType}
            onChange={(event) => {
              const selectedType = event.target.value;

              setActype(selectedType);
              setAdminRef("");

              console.log("Account Type:", selectedType);
            }}
            required
            className="w-full border border-gray-300 rounded-md p-3 mb-4 bg-white outline-none focus:border-blue-500"
          >
            <option value="">Select account type</option>
            <option value="customer">Customer Account</option>
            <option value="admin">Admin Account</option>
          </select>

          {/* Admin Reference - Only visible for Admin */}
          
{/* Admin Reference - Only visible for Admin */}
{AcType === "admin" && (
  <div className="mb-4">

    <div className="relative">

      <input
        type={showAdminRef ? "text" : "password"}
        placeholder="Enter Admin Reference"
        value={AdminRef}
        onChange={(event) => {
          setAdminRef(event.target.value);

          console.log(
            "Admin Reference characters:",
            event.target.value
          );
        }}
        required
        autoComplete="off"
        className="w-full border border-gray-300 rounded-md p-3 pr-12 outline-none focus:border-blue-500"
      />

      {/* Admin Reference Eye Button */}
      <button
        type="button"
        onClick={() => {
          const newValue = !showAdminRef;
          setShowAdminRef(newValue);

          console.log("Show Admin Reference:", newValue);
        }}
        aria-label={
          showAdminRef
            ? "Hide Admin Reference"
            : "Show Admin Reference"
        }
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 cursor-pointer"
      >
        <EyeIcon visible={showAdminRef} />
      </button>

    </div>

    <p className="text-xs text-gray-500 mt-2">
      Admin reference is required to request an admin account.
    </p>

  </div>
)}


          {/* Email */}
          <input
            type="email"
            placeholder="Email address"
            value={Email}
            onChange={(event) => {
              setEmail(event.target.value);
              console.log("Email input:", event.target.value);
            }}
            required
            className="w-full border border-gray-300 rounded-md p-3 mb-4 outline-none focus:border-blue-500"
          />

          {/* Password */}
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                console.log(
                  "Password characters:",
                  event.target.value.length
                );
              }}
              minLength={8}
              required
              className="w-full border border-gray-300 rounded-md p-3 pr-12 outline-none focus:border-blue-500"
            />

            <button
              type="button"
              onClick={() => {
                setShowPassword(!showPassword);
                console.log("Show Password:", !showPassword);
              }}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 cursor-pointer"
            >
              <EyeIcon visible={showPassword} />
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative mb-4">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(event) => {
                setConfirmPassword(event.target.value);

                console.log(
                  "Confirm Password characters:",
                  event.target.value.length
                );
              }}
              minLength={8}
              required
              className="w-full border border-gray-300 rounded-md p-3 pr-12 outline-none focus:border-blue-500"
            />

            <button
              type="button"
              onClick={() => {
                setShowConfirmPassword(!showConfirmPassword);
                console.log(
                  "Show Confirm Password:",
                  !showConfirmPassword
                );
              }}
              aria-label={
                showConfirmPassword
                  ? "Hide confirm password"
                  : "Show confirm password"
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 cursor-pointer"
            >
              <EyeIcon visible={showConfirmPassword} />
            </button>
          </div>

          {/* Password Match */}
          {confirmPassword.length > 0 && (
            <p
              className={`text-sm mb-4 ${
                password === confirmPassword
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {password === confirmPassword
                ? "Passwords match"
                : "Passwords do not match"}
            </p>
          )}

          {/* Create Account */}
          <button
            type="submit"
            disabled={loading}
            onClick={() => {
              console.log("Create Account button clicked!");
            }}
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-5">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline"
            >
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}

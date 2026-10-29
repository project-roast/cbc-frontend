
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Signup details:", {
      firstname,
      Lastname,
      Email
    });
    
    alert("Signup button clicked!");
  }

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

          <input
            type="text"
            placeholder="First name"
            value={firstname}
           onChange={(event) => {
                   setFirstname(event.target.value);
                   console.log("First tname input:", event.target.value);
                  }}

            required
            className="w-full border border-gray-300 rounded-md p-3 mb-4"
          />

          <input
            type="text"
            placeholder="Last name"
            value={Lastname}
            onChange={(event) => {
                   setLastname(event.target.value);
                   console.log("Last name input:", event.target.value);
                  }}

            required
            className="w-full border border-gray-300 rounded-md p-3 mb-4"
          />

          <input
            type="email"
            placeholder="Email address"
            value={Email}
            onChange={(event) => {
                   setEmail(event.target.value);
                   console.log("Email input:", event.target.value);
                  }}

            required
            className="w-full border border-gray-300 rounded-md p-3 mb-4"
          />

          
{/* Password */}
          
{/* Password */}
<div className="relative mb-4">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    value={password}
    onChange={(event) => setPassword(event.target.value)}
    required
    className="w-full border border-gray-300 rounded-md p-3 pr-12 outline-none focus:border-blue-500"
  />

  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    aria-label={showPassword ? "Hide password" : "Show password"}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 cursor-pointer"
  >
    <EyeIcon visible={showPassword} />
  </button>
</div>



          
{/* Confirm Password */}
<div className="relative mb-5">
  <input
    type={showConfirmPassword ? "text" : "password"}
    placeholder="Confirm password"
    value={confirmPassword}
    onChange={(event) => setConfirmPassword(event.target.value)}
    required
    className="w-full border border-gray-300 rounded-md p-3 pr-12 outline-none focus:border-blue-500"
  />

  <button
    type="button"
    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
          >
            Create Account
          </button>

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

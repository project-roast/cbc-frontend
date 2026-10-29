
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    alert("Login button clicked!");
  }

  /*for eye button funtion*/ 
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

      {/* Login card */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">

        {/* Heading */}
        <p className="text-sm text-gray-400 mb-2">
          Please enter your details
        </p>

        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome back!
        </h1>

        {/* Login form */}
        <form onSubmit={handleSubmit}>

          {/* Email */}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(event) => {
                   setEmail(event.target.value);
                   console.log("Email input:", event.target.value);
                  }}

            required
            className="w-full border border-gray-300 rounded-md p-3 mb-4 outline-none focus:border-blue-500"
          ></input>

          {/* Password */}
         {/* Password */}
<div className="relative mb-4">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    value={password}
    onChange={(event) => {
      const value = event.target.value;
      setPassword(value);

      console.log("Password characters:", value);
    }}
    required
    className="w-full border border-gray-300 rounded-md p-3 pr-12 outline-none focus:border-blue-500"
  />

  <button
    type="button"
    onClick={() => {
      const newValue = !showPassword;
      setShowPassword(newValue);
      console.log("Show Password:", newValue);
    }}
    aria-label={showPassword ? "Hide password" : "Show password"}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 cursor-pointer"
  >
    <EyeIcon visible={showPassword} />
  </button>
</div>

          {/* Remember me */}
          <div className="flex items-center justify-between mt-4 mb-5">

            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={rememberMe}
                 onChange={(event) => {
                   setRememberMe(event.target.checked);
                   console.log("Remember Me input:", event.target.checked);
                  }}
                className="h-4 w-4 accent-black-500"
              />
              Remember me
            </label>

            {/* Sign up link */}
            <a
              href="/signup"
              className="text-sm text-blue-600 hover:underline"
            >
              Sign up
            </a>

          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-green-600"
          >
            Login
          </button>

        
          
        </form>
      </div>
    </div>
  );
}

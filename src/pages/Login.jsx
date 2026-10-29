
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    alert("Login button clicked!");
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
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => {
                   setPassword(event.target.value);
                   console.log("Password input:", event.target.value);
                  }}
            required
            className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-blue-500"
          ></input>

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

          {/* Google button */}
          
        </form>
      </div>
    </div>
  );
}

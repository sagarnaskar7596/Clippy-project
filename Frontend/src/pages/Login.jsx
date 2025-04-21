import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/userContext";
import { LoadingAnimation } from "../components/Loading";
import { usePinData } from "../../context/PinContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser, btnLoading } = UserData();

  const navigate = useNavigate();

const {fetchPins} = usePinData()

  const submitHandler = (e) => {
    e.preventDefault();
    loginUser(email, password, navigate, fetchPins);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img src="/clippy_icon.png" alt="Clippy" className="h-12" />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6">
          Log in to see more
        </h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="common-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="common-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={btnLoading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            {btnLoading ? <LoadingAnimation/> : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-2 text-gray-500 text-sm">OR</span>
            </div>
          </div>

          <div className="mt-4 text-center text-sm">
            <span>
              Not on Pinterest yet?
              <Link
                to="/register"
                className="font-medium text-pinterest hover:underline"
              >
                Register
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

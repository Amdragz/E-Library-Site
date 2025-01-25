"use client";

import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
// import api from "../../api";
// import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import "../../styles/form.css";
import LoadingIndicator from "../common/loadingIndicator";

interface FormProps {
  route: string;
  method: "Login" | "Register";
}

export default function Form({ method }: FormProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = window.location.pathname;

  const name = method === "Login" ? "Login" : "Register";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    navigate("/home");

    // try {
    //   const res = await api.post(route, { username, password });
    //   if (method === "Login") {
    //     localStorage.setItem(ACCESS_TOKEN, res.data.access);
    //     localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
    //     navigate("/home");
    //   } else {
    //     navigate("/login");
    //   }
    // } catch (error: unknown) {
    //   alert(error);
    // } finally {
    //   setLoading(false);
    // }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <section className="bg-white">
        <div className="container px-6 py-20 mx-auto lg:py-32">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <img
                className="w-auto h-7 sm:h-8"
                src="https://merakiui.com/images/logo.svg"
                alt="Logo"
              />
              <h1 className="mt-4 text-gray-600 md:text-lg">
                Welcome {name ? "back" : ""}
              </h1>
              <h1 className="mt-4 text-2xl text-gray-800 lg:text-4xl font-semibold">
                {name} to continue
              </h1>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mt-0">
              <form
                onSubmit={handleSubmit}
                className="bg-white max-w-none shadow-none rounded-none py-0 px-0 
              md:py-16 md:px-6"
              >
                <div className="relative flex items-center">
                  <span className="absolute left-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="block w-full py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition duration-200 shadow-sm text-sm"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                  />
                </div>

                <div className="relative flex items-center mt-4">
                  <span className="absolute left-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="block w-full py-3 pl-12 pr-10 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition duration-200 shadow-sm text-sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <span
                    className="absolute right-3 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible className="w-5 h-5 text-gray-400" />
                    ) : (
                      <AiOutlineEye className="w-5 h-5 text-gray-400" />
                    )}
                  </span>
                </div>

                <div className="mt-8 flex flex-col items-center gap-4">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-4 px-6 py-3 font-medium text-lg text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    {loading && <LoadingIndicator />}
                    {name}
                  </button>
                  {location === "/register" && (
                    <p className="text-center md:mx-6 ">
                      Already have an account?
                      <Link
                        to="/login"
                        className="pl-2 text-blue-500 hover:underline"
                      >
                        Login
                      </Link>
                    </p>
                  )}
                  {location === "/login" && (
                    <p className="text-center md:mx-6 ">
                      Don't have an account?
                      <Link
                        to="/register"
                        className="pl-2 text-blue-500 hover:underline"
                      >
                        Register
                      </Link>
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

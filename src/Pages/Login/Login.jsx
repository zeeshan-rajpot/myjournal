import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="h-screen hidden lg:flex  justify-center items-center bg-[#FEF2CA]">
          <img
            src="/4612464 1.png"
            alt="login_background"
            className="w-[80%]"
          />
        </div>
        <div className="container flex flex-col justify-center items-center h-screen">
          <img src="/Logo.png" alt="login_Icon" className="w-32  " />
          <h1 className=" text-xl lg:text-3xl mt-10 font-semibold">Login</h1>
          <form
            className="space-y-4 md:space-y-6  w-9/12 md:w-6/12 mt-12"
            action="#"
          >
            <div className="input-container shadow bg-light ">
              {/* <FaUser className='icon' /> */}
              <img src="/Iconly-Bold-Message.svg" />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="bg-light"
              />
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-normal text-login ml-4"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-3xl focus:ring-primary-600 focus:border-primary-600 block p-2.5 w-full"
                required=""
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm"></div>
              </div>
              <Link
                to="/forgetPassword"
                className="text-sm font-normal text-login hover:underline "
              >
                Forgot password?
              </Link>
            </div>
            <div>
              <Link to="/DashBoard">
                <button
                  type="submit"
                  className="w-full text-white bg-login font-medium rounded-3xl text-sm px-5 py-2.5 text-center  hover:bg-transparent hover:text-login duration-200 border border-login"
                >
                  Login
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

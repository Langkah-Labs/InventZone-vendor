import React from "react";
// dependencies
import { useLogin } from "./hooks";
import { NavLink } from "react-router-dom";
// components
import Spinner from "../../components/Spinner";
// assets
import { icon_img } from "../../utils/constants";

export default function Index() {
  const { isLoading, loginHandler } = useLogin();

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-1 h-screen">
          <div className="relative hidden w-0 flex-1 lg:block bg-[#F6F7F9] px-8">
            <div className="h-full flex flex-col justify-between items-start pb-24">
              <img className="w-2/6" src={icon_img} alt="Your Company" />
              <div className="ml-8">
                <h2 className="body-4large-bold">Welcome back!</h2>
                <h5 className="body-base-regular text-gray-400">
                  Start managing your assets better and faster
                </h5>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center px-4 py-2 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <h2 className="mt-4 body-2large-semibold font-bold leading-9 tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
                <h5 className="text-gray-400">Lets Introduce yourself</h5>
              </div>

              <div className="mt-6">
                <div>
                  <form onSubmit={loginHandler} className="space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-[#113A5D] focus:ring-[#113A5D]"
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-3 block text-sm leading-6 text-gray-700"
                        >
                          Remember me
                        </label>
                      </div>

                      {/* <div className="text-sm leading-6">
                        <a
                          href="#"
                          className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                          Forgot password?
                        </a>
                      </div> */}
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-[#113A5D] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
                <div className="mt-10">
                  <div className="relative">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm font-medium leading-6">
                      <span className="bg-white px-6 text-gray-900">Or</span>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-center gap-4">
                    <span className="body-base-medium text-gray-400">
                      Don't you have an account?
                      <NavLink
                        to="/register"
                        className="text-sm font-semibold leading-6 text-[#167AFF] hover:opacity-80"
                      >
                        &nbsp;Sign Up
                      </NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

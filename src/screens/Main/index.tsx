import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { FaReceipt } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { useMain } from "./hooks";
// components
import Spinner from "../../components/Spinner";
// assets
import { icon_img } from "../../utils/constants";

export default function Index() {
  const { isLoading, logoutHandler } = useMain();

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="h-screen bg-[#F6F7F9]">
          <div className="flex justify-between items-center w-full py-4 px-10">
            <div className="w-1/5 flex justify-start items-center">
              <img
                src={icon_img}
                alt="invent-zone-icon"
                className="w-3/6 sm:w-5/6 xs:w-5/6"
              />
            </div>
            <div className="text-error text-[12px]">
              <button
                onClick={logoutHandler}
                className="flex items-center gap-1 rounded-md hover:opacity-75 transition body-large-medium text-red-400"
              >
                <IoIosLogOut />
                Logout
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-8 mt-24">
            <div className="text-center">
              <h2 className="body-4large-bold">Welcome back!</h2>
              <h5 className="body-base-regular text-gray-400">
                Start managing your assets better and faster
              </h5>
            </div>
            <div className="flex justify-center items-center gap-6">
              <NavLink
                to="/status"
                className="flex justify-center items-center gap-2 border border-[#113A5D] text-[#113A5D] text-[14px] rounded-md w-48 py-2 hover:opacity-75 hover:transition-opacity"
              >
                <AiFillEye />
                View Status
              </NavLink>
              <NavLink
                to="/record"
                className="flex justify-center items-center gap-2 border bg-[#113A5D] text-white text-[14px] rounded-md w-48 py-2 hover:opacity-75 hover:transition-opacity"
              >
                <FaReceipt />
                Create new record
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

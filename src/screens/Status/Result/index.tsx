import React from "react";
// dependencies
import { useStatus } from "../hooks";
// components
import Spinner from "../../../components/Spinner";
import { IoIosLogOut } from "react-icons/io";
// assets
import { icon_img } from "../../../utils/constants";
import { NavLink } from "react-router-dom";

export default function Index() {
  const { isLoading, logoutHandler } = useStatus();

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex justify-between items-start">
          <div className="w-4/12 h-screen flex flex-col justify-between items-start bg-[#F6F7F9] py-4 px-10">
            <div>
              <img
                src={icon_img}
                alt="invent-zone-icon"
                className="w-2/6 sm:w-5/6 xs:w-5/6"
              />
              <div className="flex flex-col gap-4 mt-12">
                <h2 className="body-2large-bold leading-8">View Status</h2>
                <h5 className="body-base-regular text-gray-400 leading-5">
                  Enter PO Number to get current status for your products
                </h5>
              </div>
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
          <div className="w-8/12 py-40 px-10 body-2large-semibold">
            <div className="flex flex-col justify-start items-center gap-4">
              <div className="flex justify-start items-center gap-8">
                <h2 className="font-bold">No. PO</h2>
                <h2>PO2343343</h2>
              </div>
              <div className="flex justify-start items-center gap-6">
                <h2 className="font-bold">Status</h2>
                <h2 className="text-[#AFC17E] rounded-md border border-[#AFC17E] px-2 py-1">
                  Done
                </h2>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center">
              <NavLink
                to="/"
                className="border border-[#167AFF] text-[#167AFF] text-[14px] rounded-md w-fit px-2 py-1 hover:opacity-75 hover:transition-opacity"
              >
                Back
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

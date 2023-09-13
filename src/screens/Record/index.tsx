import React from "react";
// dependencies
import { useRecord } from "./hooks";
// components
import Spinner from "../../components/Spinner";
import { IoIosLogOut } from "react-icons/io";
// assets
import { icon_img } from "../../utils/constants";
import { NavLink } from "react-router-dom";

export default function Index() {
  const { isLoading, logoutHandler, submitHandler } = useRecord();

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
                <h2 className="body-2large-bold leading-8">
                  Create a new record
                </h2>
                <h5 className="body-base-regular text-gray-400 leading-5">
                  Enter PO Number, quantity, and name of products to get
                  verified status from warehouse
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
          <div className="w-8/12 h-screen flex flex-col justify-center py-10 px-10">
            <form onSubmit={submitHandler}>
              <div className="space-y-4 sm:space-y-16">
                <div>
                  <div className="font-sans space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                      <label
                        htmlFor="productOrderId"
                        className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                      >
                        No. PO
                        <span className="text-[#C23A3A]">*</span>
                      </label>
                      <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <input
                          type="text"
                          id="productOrderId"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          required
                        />
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                      <label
                        htmlFor="product-name"
                        className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                      >
                        Product name
                        <span className="text-[#C23A3A]">*</span>
                      </label>
                      <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <select
                          id="product-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          defaultValue=""
                          required
                        >
                          <option value="">Choose One</option>
                          {/* {products?.map((item: any, i: number) => (
                                <option value={item.id} key={i}>
                                  {item.name}&nbsp;-&nbsp;({item.shorten_name})
                                </option>
                              ))} */}
                        </select>
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                      <label
                        htmlFor="quantity"
                        className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                      >
                        Qty.
                        <span className="text-[#C23A3A]">*</span>
                      </label>
                      <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <input
                          type="number"
                          id="quantity"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
                    <b>Note:&nbsp;</b>(<span className="text-[#C23A3A]">*</span>
                    ) is required
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <NavLink
                  to="/"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </NavLink>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md bg-[#113A5D] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

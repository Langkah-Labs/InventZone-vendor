import React from "react";
// dependencies
import { useStatus } from "./hooks";
// components
import Spinner from "../../components/Spinner";
import { IoIosLogOut } from "react-icons/io";
// assets
import { icon_img } from "../../utils/constants";
import { NavLink } from "react-router-dom";

export default function Index() {
  const {
    isLoading,
    records,
    logoutHandler,
    onSubmit,
    handleSubmit,
    register,
  } = useStatus();

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex justify-between items-start">
          <div className="w-5/12 h-screen flex flex-col justify-between items-start bg-[#F6F7F9] py-4 px-10">
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
          <div className="w-7/12 h-screen flex flex-col justify-center py-10 px-10">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                          {...register("productOrderId")}
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
                  Search
                </button>
              </div>
            </form>

            <div className="mt-8 flow-root">
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                  <h1 className="body-4large-bold font-semibold leading-6 text-[#113A5D]">
                    List of PO
                  </h1>
                  <p className="mt-4 body-base-regular text-gray-400">
                    This feature aims to be able to view your status
                    verification.
                  </p>
                </div>
              </div>
              <div className="-mx-4 mt-4 overflow-x-auto sm:-mx-6 lg:-mx-8 h-44">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-300 font-sans">
                    <thead className="sticky top-0 bg-[#113A5D] text-gray-100">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold  sm:pl-0"
                        >
                          Number PO
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold  sm:pl-0"
                        >
                          Product Name
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold  sm:pl-0"
                        >
                          Qty
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold  sm:pl-0"
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {records.map((serialNumber) => (
                        <tr key={serialNumber?.id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            {serialNumber?.product_order_id}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            {serialNumber?.product?.name}&nbsp;-&nbsp;(
                            {serialNumber?.product?.shorten_name})
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            {serialNumber?.quantity}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">
                            <h2
                              className={`${
                                serialNumber?.verification.toString() === "true"
                                  ? "text-[#AFC17E] border-[#AFC17E]"
                                  : "text-[#FACD89] border-[#FACD89]"
                              } rounded-md border px-2 py-1 text-center`}
                            >
                              {serialNumber?.verification.toString() === "true"
                                ? "Done"
                                : "On Progress"}
                            </h2>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

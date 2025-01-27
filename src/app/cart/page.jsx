"use client";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function cart() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[48px]">Cart</h1>
          <p className="text-sm font-semibold mt-2">
            Home
            {`>`} <inline className="font-light">Cart</inline>
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#F9F1E7]">
                  <th className="p-3 text-left">Product</th>
                  <th className="p-3 text-left">Price</th>
                  <th className="p-3 text-left">Quantity</th>
                  <th className="p-3 text-left">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 flex items-center">
                    <Image
                      src="/sofa.png"
                      alt="Asgaard Sofa"
                      width={100}
                      height={100}
                    />
                    <span className="ml-4">Asgaard Sofa</span>
                  </td>
                  <td className="p-3">Rs. 250,000.00</td>
                  <td className="p-3">
                    <input
                      type="number"
                      min="1"
                      value={1}
                      className="w-10 border rounded"
                    />
                  </td>
                  <td className="p-3">Rs. 250,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-full md:w-1/3 md:ml-8">
            <div className="bg-[#F9F1E7] p-4 flex flex-col items-center justify-center space-y-3">
              <h2 className="text-[30px] mb-3 font-bold ">Cart Totals</h2>
              <div className="flex justify-between mb-2">
                <span className="pr-2 font-bold">Subtotal:</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="pr-2 font-bold">Total:</span>
                <span className="text-[#B88E2F] text-lg">Rs. 250,000.00</span>
              </div>
              <Link href="checkout">
                <button className=" text-black border-black border-2 px-4 py-2 rounded-md my-2">
                  Check Out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

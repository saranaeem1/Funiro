"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
const Checkout = () => {
  const { register, handleSubmit } = useForm();
  const [selectedPayment, setSelectedPayment] = useState("directBankTransfer");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Checkout</h1>
          <p className="text-sm text-gray-500">Home &gt; Checkout</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4">
            <h2 className="text-xl font-bold mb-4">Billing Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  {...register("firstName", { required: true })}
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  {...register("lastName", { required: true })}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="companyName"
                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                {...register("companyName")}
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country / Region
              </label>
              <select
                id="country"
                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                {...register("country", { required: true })}
              >
                <option value="Sri Lanka">Sri Lanka</option>
                {/* Add more options here */}
              </select>
            </div>
            <div className="mt-4">
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                {...register("streetAddress", { required: true })}
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                Town/City
              </label>
              <input
                type="text"
                id="city"
                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                {...register("city")}
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                Province
              </label>
              <input
                type="text"
                id="province"
                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                {...register("province")}
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="zip"
                className="block text-sm font-medium text-gray-700"
              >
                Zip Code
              </label>
              <input
                type="number"
                id="zip"
                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                {...register("zip")}
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="number"
                id="phone"
                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                {...register("phone")}
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="city"
                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                {...register("email")}
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                id="info"
                hidden="Additional info"
                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                {...register("info")}
              />
            </div>
          </div>

          <div className="bg-white p-4">
            <h2 className="text-xl font-semibold mb-2">Product</h2>
            <div className="w-200">
              <div className="mb-4 flex justify-between">
                <p className="text-gray-600">Asgoard sofa x 1</p>
                <p className="text-gray-600">Rs. 250,000.00</p>
              </div>
              <div className="mb-4 flex justify-between">
                <p className="text-gray-600">Subtotal:</p>
                <p className="text-gray-600">Rs. 250,000.00</p>
              </div>
              <div className="mb-4 flex justify-between">
                <p className="text-gray-600 font-semibold">Total: </p>
                <p className="text-[#B88E2F] text-lg">Rs. 250,000.00</p>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-3">Payment Method</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="directBankTransfer"
                    name="paymentMethod"
                    value="directBankTransfer"
                    checked={selectedPayment === "directBankTransfer"}
                    onChange={() => setSelectedPayment("directBankTransfer")}
                    className="mr-2"
                  />
                  <label htmlFor="directBankTransfer" className="text-gray-600">
                    Direct Bank Transfer
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="cashOnDelivery"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    checked={selectedPayment === "cashOnDelivery"}
                    onChange={() => setSelectedPayment("cashOnDelivery")}
                    className="mr-2"
                  />
                  <label htmlFor="cashOnDelivery" className="text-gray-600">
                    Cash On Delivery
                  </label>
                </div>
              </div>
            </div>
            {selectedPayment === "directBankTransfer" && (
              <p className="text-gray-600">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            )}
            <div className="mt-4">
              <p className="text-gray-600">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>
            </div>
            <button
              type="submit"
              className=" text-black border-black border-2 font-semibold mt-4 py-2 px-4 rounded"
              onClick={handleSubmit(onSubmit)}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;

"use client";

import Navbar from "../components/Navbar.jsx";
import products from "../products.js"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faFilter, faTh, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faTrophy,
  faCheckCircle,
  faTruck,
  faHeadphonesAlt,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer.jsx";


export default function Shop() {
  const [results, setResults] = useState(32);
  const [showCount, setShowCount] = useState(16);
  const [sortBy, setSortBy] = useState("Default");

  return (
    <>
      <Navbar />
      <section>
        <div className="bg-[#F9F1E7] h-[316px] w-full flex flex-col justify-center items-center">
          <h1 className="font-bold text-[48px]">Shop</h1>
          <p className="font-bold text-[16px]">
            Home &gt; <inline className="font-light">Shop</inline>{" "}
          </p>
        </div>
      </section>
      <section>
        <div className="bg-[#F9F1E7] h-[100px] w-full flex justify-between items-center mt-1 p-4">
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-700 hover:text-black">
              <FontAwesomeIcon icon={faFilter} className="mr-2" />
              Filter
            </button>
            <button className="text-gray-700 hover:text-black">
              <FontAwesomeIcon icon={faTh} />
            </button>
            <button className="text-gray-700 hover:text-black">
              <FontAwesomeIcon icon={faBars} />
            </button>

            <p className="text-gray-500">
              Showing 1-{showCount} of {results} results
            </p>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <label htmlFor="showCount" className="text-gray-700">
                Show
              </label>
              <input
                id="showCount"
                type="number"
                value={showCount}
                onChange={(e) => setShowCount(e.target.value)}
                className="w-16 px-2 py-1 border border-gray-300 rounded text-center"
              />
            </div>

            <div className="flex items-center space-x-2">
              <label htmlFor="sortBy" className="text-gray-700">
                Short by
              </label>
              <select
                id="sortBy"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1"
              >
                <option value="Default">Default</option>
                <option value="Price">Price</option>
                <option value="Popularity">Popularity</option>
                <option value="Newest">Newest</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product, index) => (
            <div key={index} className="w-[285px] bg-[#F4F5F7]">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-[250px] object-cover mb-4"
              />
              <p className="text-[24px] font-semibold text-[#3A3A3A] pl-3">
                {product.name}
              </p>
              <p className="text-[#898989] text-[16px] pl-3">
                {product.detail}
              </p>
              <p className="text-black font-bold pl-3 pb-4 text-[20px]">
                {product.price}
              </p>
            </div>
          ))}
        </div>
        </section>
      <section>
        <div className="bg-black w-full h-[250px] text-white flex items-center justify-around py-8">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faTrophy}
              size="2x"
              className="text-[#B88E2F] mb-2"
            />
            <div className="pl-3">
              <h4 className="text-lg font-semibold text-[#B88E2F]">
                High Quality
              </h4>
              <p className="text-sm">Crafted from top materials</p>
            </div>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              size="2x"
              className="text-[#B88E2F] mb-2"
            />
            <div className="pl-3">
              <h4 className="text-lg font-semibold text-[#B88E2F]">
                Warranty Protection
              </h4>
              <p className="text-sm">Over 2 years</p>
            </div>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faTruck}
              size="2x"
              className="text-[#B88E2F] mb-2"
            />
            <div className="pl-3">
              <h4 className="text-lg font-semibold text-[#B88E2F]">
                Free Shipping
              </h4>
              <p className="text-sm">Order over $150</p>
            </div>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faHeadphonesAlt}
              size="2x"
              className="text-[#B88E2F] mb-2"
            />
            <div className="pl-3">
              <h4 className="text-lg font-semibold text-[#B88E2F]">
                24/7 Support
              </h4>
              <p className="text-sm">Dedicated support</p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

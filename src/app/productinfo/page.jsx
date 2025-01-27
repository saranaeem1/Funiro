"use client";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; 
import Footer from "../components/Footer.jsx";
export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <section>
        <div className="">
          <div className="">
            <nav className="text-[16px] w-full flex items-center mb-4 h-[100px] bg-[#FAF3EB]">
              <a href="" className="hover:text-black pr-2 pl-6">
                Home <span className="font-bold ml-2">&gt;</span>{" "}
              </a>{" "}
              <a href="shop" className="hover:text-black pr-2">
                Shop <span className="font-bold ml-2">&gt;</span>
              </a>{" "}
              <span className="font-bold">Asgaard sofa</span>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="aspect-square bg-[#F9F6F2] h-[500px] ml-6 flex items-center justify-center mb-4">
                  <img
                    src="/sofa.png"
                    alt="Asgaard sofa"
                    className="object-cover pl-6"
                  />
                </div>
                <div className="grid grid-cols-5 gap-2 ml-6">
                  <img
                    src="/sofa.png"
                    alt="Thumbnail"
                    className="cursor-pointer border border-gray-300 hover:border-black rounded"
                  />
                  <img
                    src="/sofa.png"
                    alt="Thumbnail"
                    className="cursor-pointer border border-gray-300 hover:border-black rounded"
                  />
                  <img
                    src="/sofa.png"
                    alt="Thumbnail"
                    className="cursor-pointer border border-gray-300 hover:border-black rounded"
                  />
                  <img
                    src="/sofa.png"
                    alt="Thumbnail"
                    className="cursor-pointer border border-gray-300 hover:border-black rounded"
                  />
                </div>
              </div>

              {/* Right: Details */}
              <div className="pr-3">
                <h1 className="text-[30px] font-bold mb-2">Asgaard sofa</h1>
                <p className="text-lg text-[#9F9F9F] mb-4">Rs. 250,000.00</p>
                <p className="text-gray-700 mb-6">
                  Setting the bar as one of the loudest speakers in its class,
                  the Kilburn is a compact, stout-hearted hero with a
                  well-balanced audio that boasts a clear midrange and extended
                  highs for a sound.
                </p>
                <div className="mb-4">
                  <h3 className="text-gray-700 mb-2">Size</h3>
                  <div className="flex space-x-2">
                    {["L", "XL", "XS"].map((size) => (
                      <button
                        key={size}
                        className="px-4 py-2 bg-[#F9F1E7] rounded hover:bg-[#B88E2F]"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color */}
                <div className="mb-4">
                  <h3 className="text-gray-700 mb-2">Color</h3>
                  <div className="flex space-x-2">
                    {["bg-[#816DFA]", "bg-[#000000]", "bg-[#B88E2F]"].map(
                      (color, index) => (
                        <div
                          key={index}
                          className={`h-6 w-6 rounded-full cursor-pointer ${color}`}
                        ></div>
                      )
                    )}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-6 flex items-center space-x-4">
                  <h3 className="text-gray-700">Quantity</h3>
                  <div className="flex items-center border border-gray-300 rounded">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-3 py-1 hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span className="px-4">{quantity}</span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="px-3 py-1 hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart */}
                <button className="w-[200px] text-black border-black border-2 py-3 rounded">
                  Add to Cart
                </button>

                <hr className="my-[50px] bg-[#9F9F9F]"></hr>

                {/* Product Meta */}
                <div className="mt-6 space-y-2">
                  <p className="text-[#9F9F9F]">
                    <strong>SKU:</strong> SS001
                  </p>
                  <p className="text-[#9F9F9F]">
                    <strong>Category:</strong> Sofas
                  </p>
                  <p className="text-[#9F9F9F]">
                    <strong>Tags:</strong> Sofa, Chair, Home, Shop
                  </p>
                </div>

                {/* Social Share */}

                <div className="flex space-x-4 mt-3">
                  <p className="text-[#9F9F9F]">
                    <strong>Share:</strong>
                  </p>
                  <a href="#" className="text-gray-700 hover:text-black">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" className="text-gray-700 hover:text-black">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#" className="text-gray-700 hover:text-black">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-10">
          <div className="flex space-x-14 justify-center">
            <h2 className="text-[24px] font-bold">Description</h2>
            <p className="text-[24px] text-[#9F9F9F] font-bold">
              Additional Information
            </p>
          </div>
          <div className="mx-32 mt-8 text-[#9F9F9F] text-justify">
            <p>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p className="mt-3 mb-4">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
          <div className="flex flex-wrap space-x-3 justify-center">
            <img
              className="w-[500px] bg-[#FAF3EB]"
              src="/sofa2.png"
              alt="sofa"
            />
            <img
              className="w-[500px] bg-[#FAF3EB]"
              src="/sofa2.png"
              alt="sofa"
            />
          </div>
          <hr className="my-[50px] bg-[#9F9F9F]"></hr>
        </div>
      </section>
      <Footer />
    </>
  );
}

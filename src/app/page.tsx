import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import products from "./products.js"; 

export default function Hero() {
  return (
    <>
      <Navbar />
      <section
        className="h-[716px] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/herosec.jpg')" }}
      >
        <div className="w-[643px] h-[443px] bg-[#FFF3E3] rounded-lg shadow-md p-8 flex flex-col justify-center ml-auto mr-[50px]">
          <p className="text-[#333333] pb-3 text-lg font-semibold">
            New Arrival
          </p>
          <h1 className="text-4xl font-bold text-[#B88E2F] mb-2">
            Discover Our
          </h1>
          <h1 className="text-4xl font-bold text-[#B88E2F] mb-4">
            New Collection
          </h1>
          <p className="text-[#333333] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="w-[200px] py-[20px] bg-[#B88E2F] text-white font-semibold rounded-lg">
            BUY NOW
          </button>
        </div>
      </section>
      <section>
        <h1 className="text-center text-[32px] font-bold mt-6">
          Browse The Range
        </h1>
        <p className="text-center text-[#666666] mb-6 mt-2 text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-center flex-wrap space-x-4">
          <div>
            <img className="w-[381] h-[480] rounded-md" src="./dining.png" />
            <p className="text-center text-[#333333] text-[24px] font-semibold pt-3">
              Dining
            </p>
          </div>
          <div>
            <img className="w-[381] h-[480] rounded-md" src="./living.png" />
            <p className="text-center text-[#333333] text-[24px] font-semibold pt-3">
              Living
            </p>
          </div>
          <div>
            <img className="w-[381] h-[480] rounded-md" src="./bedroom.png" />
            <p className="text-center text-[#333333] text-[24px] font-semibold pt-3">
              Bedroom
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 flex flex-col items-center">
        <h1 className="text-center text-4xl font-bold mb-10">Our Products</h1>
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
        <button className="w-[200px] h-[48px] m-6 border-[#B88E2F] border-solid border-2 text-[#B88E2F]">
          Show more
        </button>
      </section>
      <section>
        <div className="bg-[#FCF8F3] p-5 flex justify-center items-center">
          <div className="p-4">
            <h1 className="text-[40px] font-bold text-[#3A3A3A]">
              50+ Beautiful rooms inspiration
            </h1>
            <p className="text-[16px] text-[#616161] mt-5 mb-5">
              Our designer already made a lot of beautiful prototype of rooms
              that inspire you
            </p>
            <button className="bg-[#B88E2F] w-[176px] h-[48px] text-white">
              Explore More
            </button>
          </div>
          <div>
            <img className="w-[404px] h-[582px] mr-2" src="./bedroom1.png" />
          </div>
          <div>
            <img className="w-[404px] h-[582px] mr-2" src="./living2.png" />
          </div>
          <div>
            <img className="w-[404px] h-[582px] mr-2" src="./room.png" />
          </div>
        </div>
      </section>
      <section>
        <p className="text-center text-[#666666] mt-6 mb-3 text-[20px]">
          Share your setup with
        </p>
        <h1 className="text-center text-[32px] font-bold mb-6">
          #FuniroFurniture
        </h1>
        <img src="./Images.png" />
      </section>
      <Footer />
    </>
  );
}

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-6 flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <div>
            <img
              src="/logo.png"
              alt="Logo"
              className="h-[70px] object-contain"
            />
          </div>
          <div className="text-[34px] font-bold">Furniro</div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          <Link href="" className="text-gray-[16px] hover:text-gray-900">
            Home
          </Link>
          <Link href="shop" className="text-gray-700 hover:text-gray-900">
            Shop
          </Link>
          <Link href="about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
        </nav>
        <div className="flex items-center space-x-8">
          <FontAwesomeIcon icon={faUser} className="text-gray-500 w-5 h-5" />
          <FontAwesomeIcon icon={faSearch} className="text-gray-500 w-5 h-5" />
          <FontAwesomeIcon icon={faHeart} className="text-gray-500 w-5 h-5" />
          <Link href="cart">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-gray-500 w-5 h-5"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

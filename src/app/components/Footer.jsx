import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <hr className="my-4" />
      <div className="container mx-auto px-6 flex flex-wrap items-start justify-between py-4">
        {/* Brand Section */}
        <div>
          <p className="text-lg font-bold">Funiro.</p>
        </div>

        {/* Links Section */}
        <div>
          <p className="font-semibold mb-8">Links</p>
          <ul className="space-y-5">
            <li>
              <Link href="/" className="text-gray-600 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-600 hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <p className="font-semibold mb-8">Help</p>
          <ul className="space-y-5">
            <li>
              <Link
                href="/payment-options"
                className="text-gray-600 hover:underline"
              >
                Payment Options
              </Link>
            </li>
            <li>
              <Link href="/returns" className="text-gray-600 hover:underline">
                Returns
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policies"
                className="text-gray-600 hover:underline"
              >
                Privacy Policies
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <p className="font-semibold mb-8">Newsletter</p>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <p className="text-sm text-gray-500 pl-10 pb-3">
        2023 Funiro. All rights reserved
      </p>
    </footer>
  );
}

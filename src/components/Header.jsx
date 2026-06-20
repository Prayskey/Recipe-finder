import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = ["Home", "Recipes", "Contact", "About"];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 h-16 w-full bg-white/10 backdrop-blur-lg">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <div className="lg:w-1/3">
          <Link
            to="/"
            className="relative transform-gpu text-2xl font-black tracking-tight text-gray-900"
          >
            GORAMA<span className="text-amber-500">.</span>
          </Link>
        </div>

        <nav className="hidden justify-center space-x-8 text-sm font-semibold tracking-wider text-gray-500 lg:flex lg:w-1/3">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="relative py-1 text-gray-900 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[.1rem] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-amber-500 after:transition-transform after:duration-300 after:ease-out hover:text-gray-900 hover:after:scale-x-100"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end space-x-4 lg:w-1/3">
          <button className="hidden cursor-pointer text-sm font-medium text-gray-900 transition-all hover:text-gray-600 lg:inline-block">
            Sign In
          </button>
          <button className="hidden cursor-pointer rounded-full bg-black px-5 py-2 text-sm font-bold text-white shadow-lg shadow-gray-200 transition-all hover:bg-gray-800 active:scale-95 lg:inline-block">
            Join Free
          </button>

          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="text-gray-700 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 ease-out lg:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col space-y-1 px-6 py-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-semibold tracking-wider text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
            >
              {item}
            </Link>
          ))}
          <div className="mt-3 flex flex-col space-y-2 border-t border-gray-100 pt-3">
            <button className="rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-900">
              Sign In
            </button>
            <button className="rounded-full bg-black px-5 py-2.5 text-sm font-bold text-white active:scale-95">
              Join Free
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

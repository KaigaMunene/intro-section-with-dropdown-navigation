import { Link } from 'react-router-dom';
import FeaturesDropdownMenu from './FeaturesDropdownMenu';
import CompanyDropdownMenu from './Company-dropdown-menu';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <nav className="p-2.5 bg-backgroundColor relative z-0">
      <div className="flex justify-between items-center">
        <div className="text-almostBlack font-bold text-2xl">
          <Link to="/">snap</Link>
        </div>
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-6 text-mediumGray text-base items-center">
            <li className="p-2">
              <FeaturesDropdownMenu />
            </li>
            <li className="z-0">
              <CompanyDropdownMenu />
            </li>
            <li className="text-style hover:text-almostBlack">
              <Link to="/about">Careers</Link>
            </li>
            <li className="hover:text-almostBlack">
              <Link to="/contact">About</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center space-x-6 list-none text-sm text-mediumGray">
          <li className="hover:text-almostBlack">
            <Link to="">Login</Link>
          </li>
          <li className="border border-almostBlack px-4 py-2 rounded-full hover:text-almostBlack">
            <Link to="">Register</Link>
          </li>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-xl focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-backgroundColor mt-2.5 right-0 h-full w-1/2 fixed z-10">
          <ul className=" text-mediumGray">
            <li className="p-2">
              <FeaturesDropdownMenu onClick={closeMenu} />
            </li>
            <li className="p-2">
              <CompanyDropdownMenu onClick={closeMenu} />
            </li>
            <li>
              <Link
                to=""
                className="hover:text-almostBlack block p-2"
                onClick={closeMenu}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="hover:text-almostBlack block p-2"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <div className="flex flex-col items-center justify-center list-none text-mediumGray">
              <li className="hover:text-almostBlack p-4 text-sm font-normal text">
                <Link to="">Login</Link>
              </li>
              <li className="border border-almostBlack font-normal px-12 py-2 rounded-lg hover:text-almostBlack">
                <Link to="">Register</Link>
              </li>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

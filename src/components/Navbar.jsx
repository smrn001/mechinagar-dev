import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaFacebookMessenger,
  FaLinkedin,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/photo/logo.jpg"
            alt="Community Logo"
            className="rounded-lg"
            width={50}
            height={50}
          />
          <span className="sr-only">Developers Community Mechinagar</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <span className="sr-only">Discord</span>
                <FaDiscord className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <span className="sr-only">Messenger</span>
                <FaFacebookMessenger className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

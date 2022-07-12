import ButtonHighligh from "./ButtonHighligh";
import Logo from "../images/asslogo.svg";
import SocialMedia from "./SocialMedia";
import { useState } from "react";

function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="bg-blue-800 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-blue-800">
      <div className="container px-0 md:px-24 flex flex-wrap justify-between items-center mx-auto">
        <a href="https://assoftwares.com.br" className="flex items-center">
          <img src={Logo} className="mr-3 h-[60px]" alt="AS Softwares Logo" />
        </a>
        <div className="flex md:order-2">
          <ButtonHighligh text="Fale Conosco" />
          <button
            data-collapse-toggle="mobile-menu-4"
            type="button"
            onClick={() => setIsActive(!isActive)}
            className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-blue-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-4"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isActive ? "" : "hidden"
          } justify-between items-center w-full md:flex md:w-auto md:order-1`}
          id="mobile-menu-4"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#home"
                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                aria-current="page"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 pr-4 pl-3 text-white border-b border-gray-200 hover:bg-blue-900 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Seja Cliente
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="block py-2 pr-4 pl-3 text-white border-b border-gray-200 hover:bg-blue-900 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Produtos
              </a>
            </li>
            <li>
              <a
                href="#customers"
                className="block py-2 pr-4 pl-3 text-white border-b border-gray-200 hover:bg-blue-900 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Clientes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
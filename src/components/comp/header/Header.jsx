/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import BagIcon from "./dropdown/BagIcon"
import IconSignInHeader from "./dropdown/IconSignInHeader"
import ModalBag from "./modal/ModalBag"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCart } from "@/redux/cartSlice";

function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleDropdownModal = () => {
    setIsOpenModal(!isOpenModal);
    if (isOpenModal) {
      setIsOpen(false)
    }
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 fixed top-0 w-full z-50">
        <div className=" flex flex-wrap justify-between items-center mx-auto  p-3">
          <Link to={`/`} className=" md:order-2 order-2 flex items-center space-x-3 rtl:space-x-reverse" >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Store
            </span>
          </Link>
          <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
            aria-expanded="false"
            onClick={toggleDropdownModal}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={`order-1 md:order-1 items-center justify-between font-medium w-full md:flex md:w-auto ${isOpenModal ? '' : 'hidden'}`}

          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to={`/`}
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <button

                  onClick={toggleDropdown}
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Products
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          <div className="md:order-3 order-3 md:gap-5 gap-0 flex items-center  space-x-3 md:space-x-0 rtl:space-x-reverse">
            <BagIcon onClick={openModal} />
            <IconSignInHeader />
          </div>
        </div>
        <ModalBag isOpen={isModalOpen} onClose={closeModal} />
        <div className={`mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-transparent border-y dark:bg-gray-800 dark:border-gray-600 ${isOpen ? '' : 'hidden'}`}>
          <div
            className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6"
            style={{ overflowY: "auto", maxHeight: "40vh" }}
          >
            <ul>
              <li>
                <a
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  href="/products"
                >
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </nav >

    </>
  )
}

export default Header
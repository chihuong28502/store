/* eslint-disable react/prop-types */
import { useEffect } from 'react';

const ModalBag = ({ isOpen, onClose }) => {
    // Đóng modal khi nhấn phím Esc
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
        }

        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    // Đóng modal khi click ra ngoài
    const handleCloseModal = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-end z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none transition-transform "
                    onClick={handleCloseModal}
                >
                    <div className="relative md:w-full max-w-sm h-full bg-white shadow-lg flex flex-col p-5">
                        {/* Modal content */}
                        <div className="flex items-start justify-between mb-4">
                            <h5
                                id="drawer-navigation-label"
                                className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
                            >
                                Menu
                            </h5>
                            <button
                                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                onClick={onClose}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className="py-4 overflow-y-auto">
                            <ul className="space-y-2 font-medium">
                                <li>
                                    <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                                        <div className="w-1/4">
                                            <img
                                                src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller3.png"
                                                alt
                                                className="w-full h-full object-center object-cover"
                                            />
                                        </div>
                                        <div className="md:pl-3 md:w-3/4">
                                            <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                                                RF293
                                            </p>
                                            <div className="flex items-center justify-between w-full pt-1">
                                                <p className="text-base font-black leading-none text-gray-800">
                                                    North wolf bag
                                                </p>
                                                <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                            </div>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">
                                                Height: 10 inches
                                            </p>
                                            <p className="text-xs leading-3 text-gray-600 py-4">
                                                Color: Black
                                            </p>
                                            <p className="w-96 text-xs leading-3 text-gray-600">
                                                Composition: 100% calf leather
                                            </p>
                                            <div className="flex items-center justify-between pt-5 pr-6">
                                                <div className="flex items-center">
                                                    <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                                                        Add to favorites
                                                    </p>
                                                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                                                        Remove
                                                    </p>
                                                </div>
                                                <p className="text-base font-black leading-none text-gray-800">
                                                    $9,000
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                    >
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 18 18"
                                        >
                                            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                        </svg>
                                        <span className="flex-1 ms-3 whitespace-nowrap">
                                            Kansan
                                        </span>
                                        <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                                            Pro
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                    >
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                        </svg>
                                        <span className="flex-1 ms-3 whitespace-nowrap">
                                            Inbox
                                        </span>
                                        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                            3
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                    >
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 18"
                                        >
                                            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                        </svg>
                                        <span className="flex-1 ms-3 whitespace-nowrap">
                                            Users
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                    >
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 18 20"
                                        >
                                            <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                        </svg>
                                        <span className="flex-1 ms-3 whitespace-nowrap">
                                            Products
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                    >
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 16"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                                            />
                                        </svg>
                                        <span className="flex-1 ms-3 whitespace-nowrap">
                                            Sign In
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                    >
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                            <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                            <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                        </svg>
                                        <span className="flex-1 ms-3 whitespace-nowrap">
                                            Sign Up
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Modal footer */}
                        <footer className="border-t relative bottom-0">
                            <div>
                                <ol className="space-y-6 text-lg font-semibold child:flex child:justify-between mt-6">
                                    <li className="flex justify-between items-center">
                                        <h2>Subtotal</h2>
                                        <p>₫891,640</p>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <h2>
                                            Total{' '}
                                            <span className="text-secondary text-[#858585]">
                                                (VAT included)
                                            </span>
                                        </h2>
                                        <p>₫891,640</p>
                                    </li>
                                </ol>
                                <a
                                    aria-busy="false"
                                    className="bg-black rounded-3xl group relative inline-flex items-center justify-center whitespace-nowrap text-lg text-center font-semibold cursor-pointer border-1 border-transparent motion-safe:transition-all disabled:pointer-events-none disabled:opacity-30 rounded-12 hover:opacity-80 active:opacity-60 w-full mt-28"
                                >
                                    <span className="text-white inner flex items-center gap-8 text-center">
                                        <div className="flex w-full justify-between gap-16 py-4 text-lg font-semibold">
                                            Proceed to Checkout
                                        </div>
                                    </span>
                                </a>
                            </div>
                        </footer>
                    </div>
                </div>
            )}
            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-gray-800 opacity-25"></div>
            )}
        </>
    );
};

export default ModalBag;

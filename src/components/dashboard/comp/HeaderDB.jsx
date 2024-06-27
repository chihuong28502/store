import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [openTab, setOpenTab] = useState(1);
  return (
    <> {/* Desktop Header */}
      <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex ">
        <div className="w-1/2"></div>
        <div className="relative w-1/2 flex justify-end ">
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="relative z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
          >
            <img
              src="https://pos.nvncdn.com/b3bf61-16762/ps/20240327_cvHmFftB5M.jpeg"
              alt="Profile"
            />
          </button>
          {isMobileNavOpen && (
            <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16 z-10">
              <a href="#" className="text-black block px-4 py-2 account-link hover:text-white">Account</a>
              <a href="#" className="text-black block px-4 py-2 account-link hover:text-white">Support</a>
              <a href="#" className="text-black block px-4 py-2 account-link hover:text-white">Sign Out</a>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Header & Nav */}
      <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
        <div className="flex items-center justify-between">
          <a href="index.html" className="text-dark text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="text-dark text-3xl focus:outline-none"
          >
            {isMobileNavOpen ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
        </div>

        {/* Dropdown Nav */}
        <nav className={`${isMobileNavOpen ? 'flex' : 'hidden'} flex-col pt-4`}>
          <a href="index.html" className=" text-black flex items-center opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
            <i className="fas fa-tachometer-alt mr-3"></i>
            Dashboard
          </a>
          <Link to={`/dashboard/products`} href="blank.html" className={`text-black flex items-center ${openTab === 1 ? 'active-nav-link' : 'text-dark opacity-75 hover:opacity-100'} py-2 pl-4 nav-item`} onClick={() => setOpenTab(1)}>
            <i className="fas fa-sticky-note mr-3"></i>
            Products
          </Link>
          <a href="tables.html" className={`text-black flex items-center ${openTab === 2 ? 'active-nav-link' : 'text-dark opacity-75 hover:opacity-100'} py-2 pl-4 nav-item`} onClick={() => setOpenTab(2)}>
            <i className="fas fa-table mr-3"></i>
            Tables
          </a>
          <Link to={`/dashboard/calendar`} href="calendar.html" className="flex items-center text-black opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
            <i className="fas fa-calendar mr-3"></i>
            Calendar
          </Link>
          <a href="#" className="flex items-center text-black opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
            <i className="fas fa-sign-out-alt mr-3"></i>
            Sign Out
          </a>
          <button className="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
            <i className="fas fa-arrow-circle-up mr-3"></i> Upgrade to Pro!
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;

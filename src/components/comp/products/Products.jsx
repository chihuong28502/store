/* eslint-disable no-unused-vars */
import dataProducts from "@/data/dataProducts"
import Product from "./product/Product"
import { useEffect, useState } from "react";
import Pagination from "../pagination/Pagination";

function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Hàm để toggle hiển thị dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataProducts.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Đóng dropdown nếu click ra ngoài dropdown
  const handleOutsideClick = (event) => {
    if (!event.target.closest('.dropdown')) {
      setIsOpen(false);
      setIsOpen1(false);
      setIsOpen2(false);
    }
  };
  // Đăng ký sự kiện click ra ngoài để đóng dropdown
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="container mx-auto py-8">
        <div className="flex justify-center lg:justify-normal">
          {/* Sidebar */}
          <div className="w-1/4 p-4 lg:block hidden">
            <h2 className="text-xl font-bold mb-4">BỘ LỌC</h2>
            <ul className="space-y-2">
              <hr className="w-[50%]" />
              <li className="font-medium">
                <div className="dropdown relative">
                  <button
                    className="dropbtn text-black py-2 border-none cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    {isOpen ? "Sản phẩm -" : "Sản phẩm  +"}
                  </button>
                  <div className={`dropdown-content ${isOpen ? 'block' : 'hidden'}  
                  top-full bg-white min-w-64 shadow-md z-10`}
                  >
                    {/* Các mục trong menu dropdown */}
                    <a href="#" className="block px-4 py-2">Mục 1</a>
                    <a href="#" className="block px-4 py-2">Mục 2</a>
                    <a href="#" className="block px-4 py-2">Mục 3</a>
                  </div>
                </div>
              </li>
              <hr className="w-[50%]" />
              <li className="font-medium">
                <div className="dropdown relative">
                  <button
                    className="dropbtn text-black py-2 border-none cursor-pointer"
                    onClick={toggleDropdown1}
                  >
                    {isOpen1 ? "Sản phẩm -" : "Sản phẩm  +"}
                  </button>
                  <div className={`dropdown-content ${isOpen1 ? 'block' : 'hidden'}  
                  top-full bg-white min-w-64 shadow-md z-10`}
                  >
                    {/* Các mục trong menu dropdown */}
                    <a href="#" className="block px-4 py-2">Mục 1</a>
                    <a href="#" className="block px-4 py-2">Mục 2</a>
                    <a href="#" className="block px-4 py-2">Mục 3</a>
                  </div>
                </div>
              </li>
              <hr className="w-[50%]" />
              <li className="font-medium">
                <div className="dropdown relative">
                  <button
                    className="dropbtn text-black py-2 border-none cursor-pointer"
                    onClick={toggleDropdown2}
                  >
                    {isOpen2 ? "Sản phẩm -" : "Sản phẩm  +"}
                  </button>
                  <div className={`dropdown-content ${isOpen2 ? 'block' : 'hidden'}  
                  top-full bg-white min-w-64 shadow-md z-10`}
                  >
                    {/* Các mục trong menu dropdown */}
                    <a href="#" className="block px-4 py-2">Mục 1</a>
                    <a href="#" className="block px-4 py-2">Mục 2</a>
                    <a href="#" className="block px-4 py-2">Mục 3</a>
                  </div>
                </div>
              </li>
              <hr className="w-[50%]" />
            </ul>
          </div>
          {/* Main Content */}
          <div className="w-3/4 p-4">
            <h1 className="text-3xl font-bold mb-4">BOTTOM</h1>
            <nav className="mb-4">
              <a href="#" className="text-lg font-medium mr-4">
                Pants
              </a>
              <a href="#" className="text-lg font-medium mr-4">
                Jeans
              </a>
              <a href="#" className="text-lg font-medium mr-4">
                Shorts
              </a>
              <a href="#" className="text-lg font-medium">
                Kaki Pants
              </a>
            </nav>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              {currentItems?.map((product, index) => (
                <Product
                  key={index}
                  product={product}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={dataProducts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div >
    </>
  )
}

export default Products;

/* eslint-disable no-unused-vars */
import dataProducts from "@/data/dataProducts"
import Product from "./product/Product"
import { useEffect, useState } from "react";

function Products() {
  const [isOpen, setIsOpen] = useState(false);

  // Hàm để toggle hiển thị dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Đóng dropdown nếu click ra ngoài dropdown
  const handleOutsideClick = (event) => {
    if (!event.target.closest('.dropdown')) {
      setIsOpen(false);
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

              <li className="font-medium">
                <div className="dropdown relative">
                  <button
                    className="dropbtn bg-gray-200 text-black px-4 py-2 text-base border-none cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    các loại
                  </button>
                  <div
                    className={`dropdown-content ${isOpen ? 'block' : 'hidden'
                      }  top-full bg-white min-w-64 shadow-md z-10`}
                  >
                    {/* Các mục trong menu dropdown */}
                    <a href="#" className="block px-4 py-2">Mục 1</a>
                    <a href="#" className="block px-4 py-2">Mục 2</a>
                    <a href="#" className="block px-4 py-2">Mục 3</a>
                  </div>
                </div>
              </li>
              <li className="font-medium">THƯƠNG HIỆU</li>
              <li className="font-medium">KÍCH CỠ</li>
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
              {dataProducts?.map((product, index) => (
                <Product
                  key={index}
                  product={product}
                />
              ))}

              {/* Add more products as needed */}
            </div>
          </div>
        </div>
      </div >

    </>
  )
}

export default Products
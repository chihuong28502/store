import { useEffect, useState } from 'react'

function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

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
  // Đóng dropdown nếu click ra ngoài dropdown
  const handleOutsideClick = (event) => {
    if (!event.target.closest('.dropdown')) {
      setIsOpen(false);
      setIsOpen1(false);
      setIsOpen2(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  return (
    <>
      <div className="w-1/4 p-4 lg:block hidden">
        <h2 className="text-xl font-bold mb-4">BỘ LỌC</h2>
        <ul className="space-y-2">
          <hr className="w-full" />
          <li className="font-medium">
            <div className="dropdown relative">
              <button
                className="dropbtn text-black py-2 border-none cursor-pointer"
                onClick={toggleDropdown}
              >
                {isOpen ? "Sản phẩm -" : "Sản phẩm  +"}
              </button>
              <div className={`dropdown-content ${isOpen ? 'block' : 'hidden'}  
                   bg-white  shadow-md z-10`}
              >
                {/* Các mục trong menu dropdown */}
                <a href="#" className="block px-4 py-2 hover:bg-[#999]">Mục 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-[#999]">Mục 2</a>
                <a href="#" className="block px-4 py-2 hover:bg-[#999]">Mục 3</a>
              </div>
            </div>
          </li>
          <hr className="w-full" />
          <li className="font-medium">
            <div className="dropdown relative">
              <button
                className="dropbtn text-black py-2 border-none cursor-pointer"
                onClick={toggleDropdown1}
              >
                {isOpen1 ? "Sản phẩm -" : "Sản phẩm  +"}
              </button>
              <div className={`dropdown-content ${isOpen1 ? 'block' : 'hidden'}  
                   bg-white  shadow-md z-10`}
              >
                {/* Các mục trong menu dropdown */}
                <a href="#" className="block px-4 py-2 hover:bg-[#999]">Mục 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-[#999]">Mục 2</a>
                <a href="#" className="block px-4 py-2 hover:bg-[#999]">Mục 3</a>
              </div>
            </div>
          </li>
          <hr className="w-full" />
          <li className="font-medium">
            <div className="dropdown relative">
              <button
                className="dropbtn text-black py-2 border-none cursor-pointer"
                onClick={toggleDropdown2}
              >
                {isOpen2 ? "Sản phẩm -" : "Sản phẩm  +"}
              </button>
              <div className={`${isOpen2 ? 'block' : 'hidden'}  
                  bg-white shadow-md z-10`}
              >
                {/* Các mục trong menu dropdown */}
                <a href="#" className="block px-4 py-2 hover:bg-[#999]">Mục 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-[#999]">Mục 2</a>
                <a href="#" className="block px-4 py-2 hover:bg-[#999]">Mục 3</a>
              </div>
            </div>
          </li>
          <hr className="w-full" />
        </ul>
      </div>
    </>
  )
}

export default Filter
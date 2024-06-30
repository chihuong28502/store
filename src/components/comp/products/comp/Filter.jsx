/* eslint-disable react/prop-types */
import { setDataFilter, setDataSort } from '@/redux/productsSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function Filter({ products }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const dispatch = useDispatch();
    const handleSort = (e) => {
        const newArray = [...products];
        let className = e.target.className;
        if (className.includes('price-ASC')) {
            newArray.sort((x, y) => {
                return y.price - x.price;
            });
        } else {
            newArray.sort((x, y) => {
                return x.price - y.price;
            });
        }
        dispatch(setDataSort(newArray));
    };
    const handleFilter = (e) => {
        let arrFill = products;
        let className = e.target.className;
        if (className.includes('min')) {
            arrFill = arrFill.filter((item) => item.price < 500000);
        } else if (className.includes('medium')) {
            arrFill = arrFill.filter(
                (item) => item.price > 500000 && item.price < 1000000,
            );
        } else {
            arrFill = arrFill.filter((item) => item.price > 1000000);
        }
        dispatch(setDataFilter(arrFill));
    };
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };
    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };
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
            <div className="lg:w-1/4 w-full p-8">
                <h2 className="text-xl font-bold mb-4">BỘ LỌC</h2>
                <ul className="space-y-2">
                    <hr className="w-full" />
                    <li className="font-medium">
                        <div className="dropdown relative">
                            <button
                                className="dropbtn text-black py-2 border-none cursor-pointer"
                                onClick={toggleDropdown}
                            >
                                {isOpen ? 'Giá -' : 'Giá  +'}
                            </button>
                            <div
                                className={`dropdown-content ${isOpen ? 'block' : 'hidden'}  
                   bg-white  shadow-md z-10`}
                            >
                                <div
                                    className="min cursor-pointer block px-4 py-2 hover:bg-[#999] "
                                    onClick={handleFilter}
                                >
                                    Dưới 500.000
                                </div>
                                <div
                                    className="medium cursor-pointer block px-4 py-2 hover:bg-[#999] "
                                    onClick={handleFilter}
                                >
                                    Từ 500.000 - 1.000.000 triệu
                                </div>
                                <div
                                    className="cursor-pointer block px-4 py-2 hover:bg-[#999] "
                                    onClick={handleFilter}
                                >
                                    Trên 1.000.000
                                </div>
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
                                {isOpen1
                                    ? 'Sắp xếp theo tên -'
                                    : 'Sắp xếp theo tên  +'}
                            </button>
                            <div
                                className={`dropdown-content ${isOpen1 ? 'block' : 'hidden'}  
                   bg-white  shadow-md z-10`}
                            >
                                <div
                                    className="cursor-pointer block px-4 py-2 hover:bg-[#999] price-ASC"
                                    value="price-ASC"
                                    onClick={handleSort}
                                >
                                    Cao tới thấp
                                </div>
                                <div
                                    className="cursor-pointer block px-4 py-2 hover:bg-[#999] price-DESC"
                                    value="price-DESC"
                                    onClick={handleSort}
                                >
                                    Thấp tới cao
                                </div>
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
                                {isOpen2 ? 'Sản phẩm -' : 'Sản phẩm  +'}
                            </button>
                            <div
                                className={`${isOpen2 ? 'block' : 'hidden'}  
                  bg-white shadow-md z-10`}
                            >
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-[#999]"
                                >
                                    Mục 1
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-[#999]"
                                >
                                    Mục 2
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-[#999]"
                                >
                                    Mục 3
                                </a>
                            </div>
                        </div>
                    </li>
                    <hr className="w-full" />
                </ul>
            </div>
        </>
    );
}

export default Filter;

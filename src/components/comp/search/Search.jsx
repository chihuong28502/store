/* eslint-disable no-undef */
import { setDataSearch, setValueSearch } from '@/redux/productsSlice';
import formatText from '@/utils/formatText';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Search = () => {
    const dispatch = useDispatch();
    const value = useSelector((state) => state.products.valueSearch);
    const [valueChange, setValueChange] = useState('');
    const products = useSelector((state) => state.products.data);

    useEffect(() => {}, [value, dispatch, products]);

    const handleInputChange = (e) => {
        setValueChange(e.target.value);
    };

    const handleClickSearch = () => {
        if (valueChange) {
            const filteredProducts = products?.filter((item) =>
                formatText(item.name).includes(formatText(valueChange)),
            );
            dispatch(setValueSearch(valueChange));
            dispatch(setDataSearch(filteredProducts));
        } else {
            dispatch(setDataSearch([]));
        }
    };

    return (
        <div className="max-w-md mx-auto z-30 mt-16 pt-5">
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    value={valueChange}
                    onChange={handleInputChange}
                    required
                />
                <Link
                    onClick={() => handleClickSearch()}
                    to={`/search/${valueChange}`}
                    className="text-white absolute right-2.5 bottom-[0.3rem] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Search
                </Link>
            </div>
        </div>
    );
};

export default Search;

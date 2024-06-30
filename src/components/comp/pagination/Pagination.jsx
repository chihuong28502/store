/* eslint-disable react/prop-types */
const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    const page =
        pageNumbers.length == 1 ? (
            <></>
        ) : (
            <nav>
                <ul className="flex list-none justify-center p-0">
                    {pageNumbers.map((number) => (
                        <li
                            key={number}
                            className={`mx-1 ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded`}
                        >
                            <p
                                onClick={() => paginate(number)}
                                href="!#"
                                className={`cursor-pointer block px-4 py-2 ${currentPage === number ? 'text-white' : 'text-blue-500'} hover:bg-blue-300 rounded transition duration-300`}
                            >
                                {number}
                            </p>
                        </li>
                    ))}
                </ul>
            </nav>
        );

    return page;
};

export default Pagination;

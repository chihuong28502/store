/* eslint-disable no-unused-vars */
import { fetchProducts } from "@/redux/productsSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading"; // Import component Loading
import Pagination from "../pagination/Pagination";
import Filter from "./comp/Filter";
import Product from "./product/Product";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const status = useSelector((state) => state.products.status);
  console.log(1);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = products?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleProductClick = (product) => {
  };

  if (status !== "succeeded") {
    return <Loading />;
  }

  return (
    <>
      <div className="container mx-auto py-8 2xl:px-11">
        <div className="flex justify-center lg:justify-normal">
          {/* Sidebar */}
          <Filter />
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
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6">
              {currentItems?.map((product, index) => (
                <Product
                  key={index}
                  product={product}
                  onClick={handleProductClick}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={products?.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div >
    </>
  );
}

export default Products;

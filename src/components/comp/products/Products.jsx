/* eslint-disable no-unused-vars */
import dataProducts from "@/data/dataProducts"
import Product from "./product/Product"
import { useEffect, useState } from "react";
import Pagination from "../pagination/Pagination";
import Filter from "./comp/Filter";

function Products() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataProducts.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);



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

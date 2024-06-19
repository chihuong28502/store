/* eslint-disable react/prop-types */

import formatCurrency from "@/utils/formatMoney"
import { Link } from "react-router-dom"

function Product({ product }) {
  return (
    <>
      <Link to={`/productDetail`}>
        <div className="relative p-4 cursor-pointer">
          <img
            src={product.imageSrc}
            alt="Candles Denim Knee Blow-out"
            className="w-full h-auto mb-4"
          />
          <div className="sale absolute top-[20px] left-[30px] flex items-center flex-wrap">
            <div className="bg-red-500 text-white px-2 py-1 rounded">
              <span className="block text-center font-bold text-lg">20%</span>
              <span className="block text-center">OFF</span>
            </div>
          </div>
          <p className="font-medium mb-2">{product.name}</p>
          <p className="text-red-600 font-bold">
            {formatCurrency(product.price)}

          </p>
        </div>
      </Link>
    </>
  )
}

export default Product
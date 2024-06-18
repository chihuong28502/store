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
          <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1">
            20% OFF
          </span>
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
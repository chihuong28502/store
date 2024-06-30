/* eslint-disable react/prop-types */
import { deleteCartItem, updateCartQuantity } from '@/redux/cartSlice'
import formatCurrency from '@/utils/formatMoney'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ItemCart({ data }) {
  const dispatch = useDispatch()
  const cartData = useSelector((state) => state.cart.data)

  const [quantity, setQuantity] = useState(data?.quantity)

  useEffect(() => {
    setQuantity(data?.quantity)
  }, [data])

  const handleQuantityChange = (type) => {
    let newQuantity = quantity
    if (type === 'increment') {
      newQuantity = quantity + 1
    } else if (type === 'decrement' && quantity > 1) {
      newQuantity = quantity - 1
    }
    setQuantity(newQuantity)
    dispatch(updateCartQuantity({ id: data.id, quantity: newQuantity }))
  }

  const getProductPrice = () => {
    const product = cartData.find((item) => item.id === data.id)
    if (product) {
      return parseFloat(product.price) * parseFloat(product.quantity)
    }
    return 0
  }
  const handleDelete = () => {
    dispatch(deleteCartItem(data.id))
  }
  return (
    <>
      <div className="md:flex items-center mt-0 py-8 border-t border-gray-200">
        <div className="w-1/4">
          <img
            src={data?.imageSrc}
            alt={data?.name}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="md:pl-3 md:w-3/4">
          <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
            {data?.series}
          </p>
          <div className="flex">
            <div className="flex items-center justify-between w-full">
              <p className="text-base font-black leading-none text-gray-800">
                {data?.name}
              </p>
            </div>
            <div className="quantity-products flex items-center">
              <button
                className="w-[25px] h-[25px] sub-quantity border border-[#ccc] text-center"
                onClick={() => handleQuantityChange('decrement')}
              >
                -
              </button>
              <span
                id="quantity"
                className="w-[25px] h-[25px] border-t border-b border-[#ccc] text-center text-[0.8rem]"
              >
                {quantity}
              </span>
              <button
                className="w-[25px] h-[25px] add-quantity border border-[#ccc] text-center"
                onClick={() => handleQuantityChange('increment')}
              >
                +
              </button>
            </div>
          </div>
          <p className="text-xs leading-3 text-gray-600 pt-2">
            Size: {data?.size}
          </p>
          <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
          <p className="w-96 text-xs leading-3 text-gray-600">
            Composition: {data?.composition}
          </p>
          <div className="flex items-center justify-between pt-5 pr-6">
            <div className="flex items-center">
              <button
                onClick={handleDelete}
                className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
              >
                Remove
              </button>
            </div>
            <p className="text-base font-black leading-none text-gray-800">
              {formatCurrency(getProductPrice())}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemCart

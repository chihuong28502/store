/* eslint-disable react/prop-types */
import bagIconSvg from '@/Images/svg/BagIcon.svg'
import { useSelector } from 'react-redux'
function BagIcon({ onClick }) {
  const cart = useSelector((state) => state.cart.data)

  return (
    <>
      <button
        onClick={onClick}
        className="relative md:w-6 w-5 active:opacity-60 focus-visible:ring-3 focus-visible:ring-sky focus-visible:outline-0 hover:opacity-80"
      >
        <img src={bagIconSvg} alt="" />
        {cart?.length > 0 && (
          <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
            {cart?.length}
          </div>
        )}
      </button>
    </>
  )
}

export default BagIcon

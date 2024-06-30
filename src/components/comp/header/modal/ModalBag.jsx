/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import formatCurrency from '@/utils/formatMoney'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ItemCart from '../../cart/ItemCart'

const ModalBag = ({ isOpen, onClose }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart.data)

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
    }

    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen, onClose])

  const handleCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }
  const handleProceedToCheckout = () => {
    navigate('/checkout')
  }
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-end z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none transition-transform "
          onClick={handleCloseModal}
        >
          <div className="relative md:w-full max-w-sm h-full bg-white shadow-lg flex flex-col ">
            <div className="flex items-start justify-between px-5 pt-5">
              <h5
                id="drawer-navigation-label"
                className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
              >
                Menu
              </h5>
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className=" bg-white p-5">
              <ul className="space-y-2 font-medium">
                {cart?.map((item) => (
                  <li key={item.id}>
                    <ItemCart data={item} />
                  </li>
                ))}
              </ul>
            </div>
            <footer className="border-t relative bottom-0 bg-white p-5">
              <div>
                <ol className="space-y-6 text-lg font-semibold child:flex child:justify-between mt-6">
                  <li className="flex justify-between items-center">
                    <h2>Subtotal</h2>
                    <p>
                      {formatCurrency(
                        cart?.reduce(
                          (sum, item) => sum + item.price * item.quantity,
                          0
                        )
                      )}
                    </p>
                  </li>
                  <li className="flex justify-between items-center">
                    <h2>
                      Total{' '}
                      <span className="text-secondary text-[#858585]">
                        (VAT included)
                      </span>
                    </h2>
                    <p>
                      {formatCurrency(
                        cart?.reduce(
                          (sum, item) => sum + item.price * item.quantity,
                          0
                        ) * 1.08
                      )}
                    </p>
                  </li>
                </ol>
                <button
                  onClick={handleProceedToCheckout}
                  aria-busy="false"
                  className="bg-black rounded-3xl group relative inline-flex items-center justify-center whitespace-nowrap text-lg text-center font-semibold cursor-pointer border-1 border-transparent motion-safe:transition-all disabled:pointer-events-none disabled:opacity-30 rounded-12 hover:opacity-80 active:opacity-60 w-full mt-28"
                >
                  <span className="text-white inner flex items-center gap-8 text-center">
                    <div className="flex w-full justify-between gap-16 py-4 text-lg font-semibold">
                      Proceed to Checkout
                    </div>
                  </span>
                </button>
              </div>
            </footer>
          </div>
        </div>
      )}
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-gray-800 opacity-25"></div>}
    </>
  )
}

export default ModalBag

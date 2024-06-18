import { useState } from "react";
import ProductPolicy from "./productPolicy/ProductPolicy";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('S');


  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };
  const images = [
    'https://pos.nvncdn.com/b3bf61-16762/ps/20240402_iY7Jydiu3n.png',
    'https://pos.nvncdn.com/b3bf61-16762/ps/20240327_cvHmFftB5M.jpeg',
    'https://pos.nvncdn.com/b3bf61-16762/ps/20240402_iY7Jydiu3n.png',
    'https://pos.nvncdn.com/b3bf61-16762/ps/20240327_cvHmFftB5M.jpeg',
    'https://pos.nvncdn.com/b3bf61-16762/ps/20240402_iY7Jydiu3n.png'
  ];

  return (
    <div className="container w-3/4 xl:flex mx-auto my-10">
      <div id="default-carousel" className="xl:w-2/3 relative w-full p-0 lg:mb-10" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="relative lg:h-[1000px] xl:h-[800px] m h-[600px] overflow-hidden rounded-xl md:mb-0 mb-8">
          {images.map((item, index) => (
            <div className="hidden duration-700 ease-in-out rounded-xl" data-carousel-item="" key={index}>
              <img
                src={item}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl"
                alt={`img ${index}`}
              />
            </div>
          ))}
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
            />
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev=""
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#999] dark:bg-gray-800/30 group-hover:opacity-1 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next=""
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#999] dark:bg-gray-800/30 group-hover:opacity-1 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div className="xl:w-1/3 w-full xl:ps-5 mx-2 ">
        <div>
          <div className="mb-4 border-b border-gray-300 pb-4">
            <h3 className="mb-4 name-product text-3xl">Candles Holiday Tshirt</h3>
            <p className='text-[1rem] text-[#5b5b5b]'>Mã hàng : TS0046</p>
            <p className="text-black font-bold text-[1.1rem]">410,000 VNĐ</p>
          </div>
          <div className="">
            <p className="text-[1rem] text-[#5b5b5b]">Size</p>
            <div className="list-size mb-4 pb-3">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className={`none-active ${selectedSize === size ? 'bg-[#999]' : ''} border border-[#ccc] mr-2 font-bold text-[1rem] w-[30px] h-[30px]`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="flex items-center mb-5 pb-2">
              <label className="mr-4 text-[1rem]">Số lượng</label>
              <div className="quantity-products flex items-center">
                <button className=" w-[40px] h-[30px]  sub-quantity border border-[#ccc] text-center" onClick={() => handleQuantityChange('decrement')}>-</button>
                <span id="quantity" className="w-[40px] h-[30px] border-t border-b border-[#ccc] text-center text-[1rem]">{quantity}</span>
                <button className=" w-[40px] h-[30px]  add-quantity border border-[#ccc] text-center" onClick={() => handleQuantityChange('increment')}>+</button>
              </div>
            </div>
            <div className="w-full mb-5">
              <button className="add-product w-full bg-black text-white py-4 text-lg font-medium">Add to cart</button>
            </div>
          </div>
        </div>
        <div className="">
          <ProductPolicy />
        </div>
      </div>
    </div>
  );
}

/* eslint-disable react/prop-types */
import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('S');
  const [cartItems, setCartItems] = useState([]);
  const [mainImage, setMainImage] = useState('https://pos.nvncdn.com/b3bf61-16762/ps/20240402_iY7Jydiu3n.png');

  const images = [
    'https://pos.nvncdn.com/b3bf61-16762/ps/20240402_iY7Jydiu3n.png',
    'https://pos.nvncdn.com/b3bf61-16762/ps/20240327_cvHmFftB5M.jpeg',
    'https://pos.nvncdn.com/b3bf61-16762/ps/20240402_iY7Jydiu3n.png',
    'https://pos.nvncdn.com/b3bf61-16762/ps/20240327_cvHmFftB5M.jpeg',
    'https://pos.nvncdn.com/b3bf61-16762/ps/20240402_iY7Jydiu3n.png'
  ];

  const handleAddToCart = () => {
    const newItem = {
      name: 'Candles Holiday Tshirt',
      size: selectedSize,
      quantity,
      image: mainImage,
      price: '410,000 VNĐ'
    };
    setCartItems([...cartItems, newItem]);
  };

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    swipe: true,
    dots: false,
    infinite: false,
    arrows: false, // Tắt nút lên xuống
    touchMove: true, // Cho phép kéo bằng ngón tay
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          vertical: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          vertical: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          vertical: true,
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="mx-auto container w-3/4 flex flex-wrap justify-between py-24">
      <div className="justify-center p-0 lg:flex-1 flex flex-wrap lg:pe-5">
        <div className="h-fit lg:w-1/4 w-full text-center">
          <Slider {...settings} className='custom-slider'>
            {images.map((src, index) => (
              <div key={index} className="rounded-3xl cursor-pointer">
                <img
                  className="md:w-[100%] cursor-pointer rounded-lg px-4"
                  src={src}
                  alt=""
                  onClick={() => setMainImage(src)}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="lg:w-3/4 w-full mx-auto">
          <div className="rounded-2xl img-show">
            <img className="w-full" src={mainImage} alt="Selected" />
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 w-full lg:ps-5">
        <div>
          <div className="mb-4 border-b border-gray-300">
            <h3 className="mb-4 name-product text-3xl">Candles Holiday Tshirt</h3>
            <p className='text-xl text-[#5b5b5b]'>Mã hàng : TS0046</p>
            <p className="text-black font-bold text-xl">410,000 VNĐ</p>
          </div>
          <div className="description-info">
            <p className="text-xl text-[#5b5b5b]">Size</p>
            <div className="list-size mb-4 pb-3">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className={`none-active ${selectedSize === size ? 'active-size' : ''} border border-gray-400 px-4 py-2 mr-2 font-bold text-lg`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="flex items-center mb-5 pb-2">
              <label className="mr-4 text-xl">Số lượng</label>
              <div className="quantity-products flex items-center">
                <button className="sub-quantity border border-gray-400 px-4 text-center" onClick={() => handleQuantityChange('decrement')}>-</button>
                <span id="quantity" className="border border-gray-400 px-4 text-center text-xl">{quantity}</span>
                <button className="add-quantity border border-gray-400 px-4 text-center" onClick={() => handleQuantityChange('increment')}>+</button>
              </div>
            </div>
            <div className="w-full mb-5">
              <button onClick={handleAddToCart} className="add-product w-full bg-black text-white py-4 text-lg font-medium">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

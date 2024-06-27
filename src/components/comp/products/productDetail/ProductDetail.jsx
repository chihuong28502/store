import {
  addCartItem,
  updateCartQuantity
} from "@/redux/cartSlice";
import formatCurrency from "@/utils/formatMoney";
import { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from "react-redux";
import ProductSlide from "../comp/ProductSlide";
import ProductPolicy from "./productPolicy/ProductPolicy";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  const status = useSelector((state) => state.products.status);
  const cartData = useSelector((state) => state.cart.data);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");

  useEffect(() => {
    const storedData = localStorage.getItem('dataDetail');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, [status]);

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddItemCart = () => {
    const product = {
      id: userData?.id.toString(),
      name: userData?.name,
      price: userData?.price,
      series: userData?.series,
      size: selectedSize,
      imageSrc: userData?.imageSrc,
      quantity,
      composition: userData?.composition,
    };

    const existingProductIndex = cartData.findIndex(
      item => item?.name === product?.name && item?.size === product?.size
    );
    if (existingProductIndex !== -1) {
      const existingProduct = cartData[existingProductIndex];
      dispatch(updateCartQuantity({ id: existingProduct?.id, quantity: existingProduct?.quantity + quantity }));
    } else {
      dispatch(addCartItem({ ...product, id: (cartData.length + 1).toString() }));
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if (!userData || !userData?.imageDetail || userData?.imageDetail?.length === 0) {
    return null;
  }

  const getSizeOpacity = (size) => {
    const selectedSizeObj = userData.sizes.find(item => item.size === size);
    if (selectedSizeObj && selectedSizeObj.quantity > 0) {
      return "";
    } else {
      return "opacity-30 cursor-not-allowed !bg-[#999] text-white";
    }
  };

  const renderCrossLines = (size) => {
    const selectedSizeObj = userData.sizes.find(item => item.size === size);
    console.log(selectedSizeObj);
    if ((selectedSizeObj && !(selectedSizeObj?.quantity > 0))) {
      return (
        <>
          <span className="absolute inset-0 flex items-center justify-center text-[#000] before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-[#000] before:rotate-[-45deg] before:left-0 before:top-1/2 before:transform before:translate-y-[-50%]"></span>
          <span className="absolute inset-0 flex items-center justify-center text-[#000] before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-[#000] before:rotate-[-135deg] before:left-0 before:top-1/2 before:transform before:translate-y-[-50%]"></span>
        </>
      )
    } else {
      return null;
    }
  };

  const getSelectedSizeObj = () => {
    return userData.sizes.find(item => item.size === selectedSize);
  };

  const isAddToCartDisabled = () => {
    const selectedSizeObj = getSelectedSizeObj();
    return selectedSizeObj?.quantity === 0;
  };

  return (
    <>
      <div className="container w-3/4 xl:flex mx-auto my-10 pt-[64px]">
        <div className="xl:w-2/3 relative w-full p-0 lg:mb-10 mb-6">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            containerClass="carousel-container"
            itemClass="carousel-item"
          >
            {userData?.imageDetail?.map((item, index) => (
              <div key={index}>
                <img
                  src={item}
                  className="block w-full rounded-xl"
                  alt={`img ${index}`}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="xl:w-1/3 w-full xl:ps-5 mx-2">
          <div>
            <div className="mb-4 border-b border-gray-300 pb-4">
              <h3 className="mb-4 name-product text-3xl">{userData?.name}</h3>
              <p className="text-[1rem] text-[#5b5b5b]">Mã hàng : {userData?.series}</p>
              <p className="text-black font-bold text-[1.1rem]">{formatCurrency(userData?.price)}</p>
            </div>
            <div className="">
              <p className="text-[1rem] text-[#5b5b5b]">Size</p>
              <div className="list-size mb-4 pb-3">
                {["S", "M", "L", "XL"].map((size, index) => (
                  <button
                    key={index}
                    className={`relative none-active ${selectedSize === size ? "bg-[#000] text-white" : ""} border border-[#ccc] mr-2 font-bold text-[1rem] w-[30px] h-[30px] ${getSizeOpacity(size)}`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                    {renderCrossLines(size)}
                  </button>
                ))}
              </div>
              <div className="flex items-center mb-5 pb-2">
                <label className="mr-4 text-[1rem]">Số lượng</label>
                <div className="quantity-products flex items-center">
                  <button
                    className="w-[40px] h-[30px] sub-quantity border border-[#ccc] text-center"
                    onClick={() => handleQuantityChange("decrement")}
                  >
                    -
                  </button>
                  <span
                    id="quantity"
                    className="w-[40px] h-[30px] border-t border-b border-[#ccc] text-center text-[1rem]"
                  >
                    {quantity}
                  </span>
                  <button
                    className="w-[40px] h-[30px] add-quantity border border-[#ccc] text-center"
                    onClick={() => handleQuantityChange("increment")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="w-full mb-5">
                <button
                  onClick={() => handleAddItemCart()}
                  className={`add-product w-full bg-black text-white py-4 text-lg font-medium hover:bg-[#888] hover:text-[#000] ${isAddToCartDisabled() ? "opacity-30 cursor-not-allowed" : ""}`}
                  disabled={isAddToCartDisabled()}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <ProductPolicy userData={userData} />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <ProductSlide />
      </div>
    </>
  );
}

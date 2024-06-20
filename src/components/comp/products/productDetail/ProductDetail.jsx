import { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductSlide from "../comp/ProductSlide";
import ProductPolicy from "./productPolicy/ProductPolicy";
import { useSelector } from "react-redux";
import formatCurrency from "@/utils/formatMoney";

export default function ProductDetail() {
  const status = useSelector((state) => state.products.status);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('dataDetail');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, [status]);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
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

  // Check if userData and imageDetail are defined before rendering Carousel
  if (!userData || !userData?.imageDetail || userData?.imageDetail.length === 0) {
    return null; // Or handle loading state or default content
  }

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
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className={`none-active ${selectedSize === size ? "bg-[#999]" : ""
                      } border border-[#ccc] mr-2 font-bold text-[1rem] w-[30px] h-[30px]`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
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
                <button className="add-product w-full bg-black text-white py-4 text-lg font-medium hover:bg-[#888] hover:text-[#000]">
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

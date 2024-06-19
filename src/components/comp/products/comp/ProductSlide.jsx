import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import dataProducts from "@/data/dataProducts"
import Product from "../product/Product"
const ProductSlide = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <h2 className="text-center my-8 text-3xl font-medium">Sản phẩm tương tự</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {dataProducts.map((item, index) => (
          <Product key={index} product={item} />
        ))}
      </Carousel>
    </>
  );
};

export default ProductSlide;

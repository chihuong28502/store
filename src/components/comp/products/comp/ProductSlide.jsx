import { fetchProducts } from "@/redux/productsSlice";
import slugify from "@/utils/formatSlug";
import { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Product from "../product/Product";

const ProductSlide = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  // const status = useSelector((state) => state.products.status);

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  useEffect(() => {
    if (selectedProduct) {
      dispatch(fetchProducts());
    }
  }, [dispatch, selectedProduct]);


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
        {products?.map((item) => (
          <Link
            key={item?.id}
            to={`/products/product/${slugify(item?.id)}`}
            onClick={() => handleProductClick(item)}
          >
            <Product product={item} />
          </Link>
        ))}
      </Carousel>
    </>
  );
};

export default ProductSlide;

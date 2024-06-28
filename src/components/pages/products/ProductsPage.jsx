import Header from "@/components/comp/header/Header";
import Products from "@/components/comp/products/Products";
import Search from "@/components/comp/search/Search";
import Slider from "@/components/comp/slider/Slider";
import { fetchProducts } from "@/redux/productsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const status = useSelector((state) => state.products.status);
  const titleText = "Products"
  const isFilter = true
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <Search />
      <Header />
      <Slider />
      <Products products={products} status={status} titleText={titleText} isFilter={isFilter} />
    </>
  )
}

export default ProductsPage
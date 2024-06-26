import Loading from '@/components/comp/loading/Loading';
import { fetchProducts } from '@/redux/productsSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../HeaderDB';
import NavigationDB from '../NavigationDB';
import ProductsDB from '../ProductsDB';

function ProductsDBPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch,]);
  if (status !== "succeeded") {
    return <Loading />;
  }
  return (
    <div>
      <div className="flex h-screen bg-gray-100">
        <NavigationDB />
        <div className="flex flex-col w-full">
          <Header />
          <ProductsDB data={products} />
        </div>
      </div>
    </div>
  )
}

export default ProductsDBPage
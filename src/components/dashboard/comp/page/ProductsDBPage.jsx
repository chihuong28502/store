import { fetchProducts } from '@/redux/productsSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../HeaderDB'
import NavigationDB from '../NavigationDB'
import ProductsDB from '../ProductsDB'
import Footer from '../Footer'

function ProductsDBPage() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.data)
  // const status = useSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  return (
    <div>
      <div className="flex h-screen bg-gray-100">
        <NavigationDB />
        <div className="flex flex-col w-full">
          <Header />
          <ProductsDB data={products} />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ProductsDBPage

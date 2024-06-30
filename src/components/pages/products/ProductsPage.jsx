import Header from '@/components/comp/header/Header'
import Products from '@/components/comp/products/Products'
import Search from '@/components/comp/search/Search'
import Slider from '@/components/comp/slider/Slider'
import { fetchProducts } from '@/redux/productsSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ProductsPage() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.data)
  const productsFilter = useSelector((state) => state.products.dataFilter)
  const productsSort = useSelector((state) => state.products.dataSort)
  const status = useSelector((state) => state.products.status)
  const statusFilter = useSelector((state) => state.products.statusFilter)
  const statusSort = useSelector((state) => state.products.statusSort)
  const titleText = 'Products'
  const isFilter = true

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  let displayProducts = products
  if (statusFilter === 'filter') {
    displayProducts = productsFilter
  } else if (statusSort === 'sort') {
    displayProducts = productsSort
  }

  return (
    <>
      <Search />
      <Header />
      <Slider />
      <Products
        products={displayProducts}
        status={status}
        titleText={titleText}
        isFilter={isFilter}
      />
    </>
  )
}

export default ProductsPage

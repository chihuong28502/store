import Header from '../HeaderDB'
import NavigationDB from '../NavigationDB'
import ProductsDB from '../ProductsDB'

function ProductsDBPage() {
  return (
    <div>
      <div className="flex h-screen bg-gray-100">
        <NavigationDB />
        <div className="flex flex-col w-full">
          <Header />
          <ProductsDB />
        </div>
      </div>
    </div>
  )
}

export default ProductsDBPage
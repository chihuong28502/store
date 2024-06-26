import CalendarDB from '../CaledarDB'
import Header from '../HeaderDB'
import NavigationDB from '../NavigationDB'

function ProductsDBPage() {
  return (
    <div>
      <div className="flex h-screen bg-gray-100">
        <NavigationDB />
        <div className="flex flex-col w-full">
          <Header />
          <CalendarDB />
        </div>
      </div>
    </div>
  )
}

export default ProductsDBPage
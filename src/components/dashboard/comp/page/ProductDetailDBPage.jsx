import Footer from "../Footer"
import Header from "../HeaderDB"
import NavigationDB from "../NavigationDB"
import ProductDetailDB from "../ProductDetailDB"

function ProductDetailDBPage() {
  return (
    <><div>
      <div className="flex h-screen bg-gray-100">
        <NavigationDB />
        <div className="flex flex-col w-full">
          <Header />
          <ProductDetailDB />
          <Footer />

        </div>
      </div>
    </div></>
  )
}

export default ProductDetailDBPage
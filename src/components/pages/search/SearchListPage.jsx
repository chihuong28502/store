import Header from "@/components/comp/header/Header";
import Products from "@/components/comp/products/Products";
import Search from "@/components/comp/search/Search";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function SearchListPage() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.products.dataSearch);
  const valueSearch = useSelector((state) => state.products.valueSearch);
  const [dataLocalStorage, setDataLocalStorage] = useState(data)
  const [valueLocalStorage, setValueLocalStorage] = useState(valueSearch)
  const status = useSelector((state) => state.products.status);
  useEffect(() => {
    setDataLocalStorage(JSON.parse(localStorage.getItem('dataSearch')))
    setValueLocalStorage(JSON.parse(localStorage.getItem('valueSearch')))
  }, [ data,valueSearch, dispatch])

  return (
    <>
      <Search />
      <Header />
      <Products products={dataLocalStorage} status={status} titleText={`Tìm kiếm: ${valueLocalStorage}`} />
    </>
  )
}

export default SearchListPage
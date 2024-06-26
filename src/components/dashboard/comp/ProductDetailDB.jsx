import formatCurrency from "@/utils/formatMoney"; // Đảm bảo thay đổi đường dẫn phù hợp với project của bạn
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductDetailDB() {
  // Dữ liệu sản phẩm từ chuỗi JSON đã cung cấp
  const [data, setData] = useState(null);

  const status = useSelector((state) => state.products.status);
  
  useEffect(() => {
    const storedData = localStorage.getItem('Data-Product-DB');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, [status]);
  return (
    <>
      <table className="items-center justify-center w-full mb-0 text-slate-500">
        <thead>
          <tr>
            <th className="px-6 py-3 font-bold text-left uppercase bg-transparent border-b border-gray-200 text-xxs text-slate-400 opacity-70">Mã hàng</th>
            <th className="px-6 py-3 font-bold text-left uppercase bg-transparent border-b border-gray-200 text-xxs text-slate-400 opacity-70">Name & Image</th>
            <th className="px-6 py-3 pl-2 font-bold text-left uppercase bg-transparent border-b border-gray-200 text-xxs text-slate-400 opacity-70">Price</th>
            <th className="px-6 py-3 pl-2 font-bold text-left uppercase bg-transparent border-b border-gray-200 text-xxs text-slate-400 opacity-70">Size</th>
            <th className="px-6 py-3 pl-2 font-bold text-center uppercase bg-transparent border-b border-gray-200 text-xxs text-slate-400 opacity-70">Chất liệu</th>
            <th className="px-6 py-3 font-semibold bg-transparent border-b border-gray-200"></th>
          </tr>
        </thead>
        <tbody>
          {data?.sizes.map((size, index) => (
            <tr key={index}>
              <td className={`px-6 bg-transparent shadow-transparent`}>
                <p className="mb-0 text-sm font-semibold">{data?.series}</p>
              </td>
              <td className={`p-2 bg-transparent shadow-transparent`}>
                <div className="flex px-2">
                  <img src={data?.imageSrc} className="inline-flex items-center justify-center mr-2 h-9 w-9" alt={data?.name} />
                  <div className="my-auto">
                    <h6 className="mb-0 text-sm">{data?.name}</h6>
                  </div>
                </div>
              </td>
              <td className={`p-2 bg-transparent shadow-transparent`}>
                <p className="mb-0 text-sm font-semibold">{formatCurrency(data?.price)}</p>
              </td>
              <td className={`p-2 bg-transparent shadow-transparent`}>
                <div key={size.size}>
                  <span className="text-xs font-semibold">{size.size}: {size.quantity}</span>
                </div>
              </td>
              <td className={`p-2 text-center bg-transparent shadow-transparent`}>
                <span className="text-xs font-semibold">{data?.composition}</span>
              </td>
              <td className={`p-2 bg-transparent shadow-transparent`}>
                <Link
                  to={`/dashboard/product/${data?.series}`}
                  className="px-6 py-3 mb-0 text-xs font-bold text-center uppercase bg-transparent border-0 rounded-lg text-slate-400"
                >
                  XEM
                </Link>
                <button
                  className="px-6 py-3 mb-0 text-xs font-bold text-center uppercase bg-transparent border-0 rounded-lg text-slate-400"
                >
                  Edit
                </button>
                <button
                  className="px-6 py-3 mb-0 text-xs font-bold text-center uppercase bg-transparent border-0 rounded-lg text-slate-400"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductDetailDB;

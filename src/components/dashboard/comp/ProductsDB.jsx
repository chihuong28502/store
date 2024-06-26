/* eslint-disable react/prop-types */
import { useState } from 'react';
import ModalEditProductsDB from '../modal/ModalEditProductsDB';
import formatCurrency from '@/utils/formatMoney';

function ProductsDB({ data }) {
  const [products, setProducts] = useState(data);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);

  const handleDelete = (index) => {
    if (window.confirm('Bạn có muốn xóa sản phẩm đang đăng bán này không?')) {
      const newProducts = products.filter((_, i) => i !== index);
      setProducts(newProducts);
    }
  };

  const handleEditClick = (product) => {
    setEditedProduct({ ...product });
    setIsModalOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditSubmit = () => {
    const newProducts = products.map((product) =>
      product?.series === editedProduct?.series ? editedProduct : product
    );
    setProducts(newProducts);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
        <main className="w-full flex-grow p-6">
          <h1 className="text-3xl text-black pb-6">Products</h1>
        </main>
        <div className="w-full h-screen">
          <div className="flex flex-wrap mx-3">
            <div className="w-full max-w-full px-3">
              <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white shadow-soft-xl rounded-2xl">
                <div className="p-6 pb-0 mb-0 bg-white rounded-t-2xl border-b">
                  <h6>All Products</h6>
                </div>
                <div className="flex-auto px-0 pt-0">
                  <div className="overflow-x-auto">
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
                        {products.map((product, index) => (
                          <tr key={index}>
                            <td className={`px-6 bg-transparent ${index !== products?.length - 1 ? 'border-b' : ''} shadow-transparent`}>
                              <p className="mb-0 text-sm font-semibold">{product?.series}</p>
                            </td>
                            <td className={`p-2 bg-transparent ${index !== products?.length - 1 ? 'border-b' : ''} shadow-transparent`}>
                              <div className="flex px-2">
                                <img src={product?.imageSrc} className="inline-flex items-center justify-center mr-2 h-9 w-9" alt={product?.name} />
                                <div className="my-auto">
                                  <h6 className="mb-0 text-sm">{product?.name}</h6>
                                </div>
                              </div>
                            </td>
                            <td className={`p-2 bg-transparent ${index !== products?.length - 1 ? 'border-b' : ''} shadow-transparent`}>
                              <p className="mb-0 text-sm font-semibold">{formatCurrency(product?.price)}</p>
                            </td>
                            <td className={`p-2 bg-transparent ${index !== products?.length - 1 ? 'border-b' : ''} shadow-transparent`}>
                              <span className="text-xs font-semibold">
                                {/* {product?.size}  */}
                                M
                              </span>
                            </td>
                            <td className={`p-2 text-center bg-transparent ${index !== products?.length - 1 ? 'border-b' : ''} shadow-transparent`}>
                              <span className="mr-2 text-xs font-semibold">{product?.composition}</span>
                            </td>
                            <td className={`p-2 bg-transparent ${index !== products?.length - 1 ? 'border-b' : ''} shadow-transparent`}>
                              <button
                                onClick={() => handleEditClick(product)}
                                className="px-6 py-3 mb-0 text-xs font-bold text-center uppercase bg-transparent border-0 rounded-lg text-slate-400"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(index)}
                                className="px-6 py-3 mb-0 text-xs font-bold text-center uppercase bg-transparent border-0 rounded-lg text-slate-400"
                              >
                                Xóa
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="w-full bg-white text-right p-4">
          Built by{" "}
          <a target="_blank" href="https://davidgrzyb.com" className="underline">
            David Grzyb
          </a>
        </footer>
      </div>

      <ModalEditProductsDB
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        editedProduct={editedProduct}
        handleEditChange={handleEditChange}
        handleEditSubmit={handleEditSubmit}
      />
    </>
  );
}

export default ProductsDB;

/* eslint-disable react/prop-types */

function ModalAddProductsDB({ isOpen, onRequestClose, addProduct, handleAddChange, handleAddSubmit }) {
  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddSubmit();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 overflow-y-auto max-h-[100vh]">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
          <div className="">
            <button type="button" onClick={onRequestClose}>
              <i className="text-2xl fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Mã hàng:
            <input
              type="text"
              name="series"
              value={addProduct?.series}
              onChange={handleAddChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Name:
            <input
              type="text"
              name="name"
              value={addProduct?.name}
              onChange={handleAddChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Price:
            <input
              type="text"
              name="price"
              value={addProduct?.price}
              onChange={handleAddChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Chất liệu:
            <input
              type="text"
              name="composition"
              value={addProduct?.composition}
              onChange={handleAddChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Logo URL:
            <input
              type="text"
              name="imageSrc"
              value={addProduct?.imageSrc}
              onChange={handleAddChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </label>
          <div className="">
            <img src={addProduct?.imageSrc} alt={addProduct?.name} />
          </div>
          <div className="flex justify-end mt-4">
            <button type="submit" className="px-4 py-2 mr-2 bg-blue-500 text-white rounded">
              Save
            </button>
            <button type="button" onClick={onRequestClose} className="px-4 py-2 bg-gray-300 rounded">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalAddProductsDB;

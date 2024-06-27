/* eslint-disable react/prop-types */
import { updateProductSizes } from '@/redux/productsSlice'; // Adjust import path as per your project structure
import { useDispatch } from 'react-redux';

function ModalEditSize({ data, isOpen, onRequestClose, editedProduct, handleEditChange }) {
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const updatedSize = {
        size: editedProduct.size,
        quantity: editedProduct.quantity,
      };

      // Prepare updated sizes array
      const updatedSizes = data?.sizes.map((sizeObj) =>
        sizeObj.size === editedProduct?.size ? updatedSize : sizeObj
      );

      // Dispatch updateProductSizes thunk
      await dispatch(updateProductSizes({ id: data.id, sizes: updatedSizes }));
      onRequestClose();
    } catch (error) {
      console.error("Failed to update product sizes:", error);
      // Handle error state or notify the user
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 overflow-y-auto max-h-[100vh]">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold mb-4">Edit Size</h2>
          <div>
            <button type="button" onClick={onRequestClose}>
              <i className="text-2xl fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Size:
            <input
              type="text"
              name="size"
              value={editedProduct?.size || ''}
              onChange={handleEditChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Quantity:
            <input
              type="text"
              name="quantity"
              value={editedProduct?.quantity || ''}
              onChange={handleEditChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </label>
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

export default ModalEditSize;

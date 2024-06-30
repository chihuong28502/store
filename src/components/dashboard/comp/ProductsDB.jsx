/* eslint-disable react/prop-types */
import {
    addProducts,
    deleteDBItem,
    setDataProductDB,
    updateProduct,
} from '@/redux/productsSlice';
import formatCurrency from '@/utils/formatMoney';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import ModalAddProductsDB from '../modal/ModalAddProductsDB';
import ModalEditProductsDB from '../modal/ModalEditProductsDB';

function ProductsDB({ data }) {
    const dispatch = useDispatch();
    const dataDispatch = useSelector((state) => state.products.data);
    const [products, setProducts] = useState(dataDispatch);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);
    const [editedProduct, setEditedProduct] = useState({
        series: '',
        name: '',
        price: 0,
        sizes: [],
        composition: '',
        imageSrc: '',
        logo: '',
    });
    const [addProduct, setAddProduct] = useState({
        id: uuidv4(),
        name: '',
        price: 0,
        composition: '',
        series: '',
        imageSrc: '',
        imageDetail: [
            'https://pos.nvncdn.com/b3bf61-16762/ps/20240327_zO81Wj9w1k.jpeg',
            'https://pos.nvncdn.com/b3bf61-16762/ps/20240327_cvHmFftB5M.jpeg',
            'https://pos.nvncdn.com/b3bf61-16762/ps/20240313_pC5qPLcJFi.jpeg',
            'https://pos.nvncdn.com/b3bf61-16762/ps/20240313_UerGjLDevQ.jpeg',
            'https://pos.nvncdn.com/b3bf61-16762/ps/20240402_SOOk0wM2WH.png',
        ],
        sizes: [
            {
                size: 'S',
                quantity: 0,
            },
            {
                size: 'M',
                quantity: 15,
            },
            {
                size: 'L',
                quantity: 20,
            },
            {
                size: 'XL',
                quantity: 0,
            },
        ],
        tags: ['thời trang', 'nam', 'mùa hè'],
    });

    useEffect(() => {
        setProducts(data);
    }, [data]);

    const handleDelete = async (product) => {
        if (window.confirm('Bạn có muốn xóa sản phẩm này không?')) {
            try {
                await dispatch(deleteDBItem(product?.id));
                toast.success(`Xóa thành công sản phẩm ${product?.name}`);
            } catch (error) {
                // console.error('Error deleting product:', error);
                toast.error(`Xóa không thành công sản phẩm ${product?.name}`);
            }
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
            [name]: name === 'price' ? parseFloat(value) : value,
        }));
    };

    const handleEditSubmit = async () => {
        try {
            await dispatch(updateProduct(editedProduct));
            setIsModalOpen(false);
            toast.success(`Sửa thành công sản phẩm`);
        } catch (error) {
            // console.error('Error updating product:', error);
            toast.error(`Sửa không thành công sản phẩm`);
        }
    };

    const handleClickProductDB = async (product) => {
        await dispatch(setDataProductDB(product));
        // bấm xem để check all size
    };

    const handleAddClick = () => {
        setIsModalOpenAdd(true);
    };

    const handleAddChange = (e) => {
        const { name, value } = e.target;
        setAddProduct((prev) => ({
            ...prev,
            [name]: name === 'price' ? parseFloat(value) : value,
        }));
    };

    const handleAddSubmit = async () => {
        try {
            await dispatch(addProducts(addProduct));
            setIsModalOpenAdd(false);
            toast.success(`Thêm thành công sản phẩm`);
        } catch (error) {
            // console.error('Error adding product:', error);
            toast.error(`Thêm không thành công sản phẩm`);
        }
    };
    return (
        <>
            <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                <main className="w-full flex-grow p-6 flex justify-between">
                    <h1 className="text-3xl text-black pb-6 flex">Products</h1>
                    <button
                        title="Add New"
                        className="group cursor-pointer outline-none hover:rotate-90 duration-300"
                        onClick={handleAddClick}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50px"
                            height="50px"
                            viewBox="0 0 24 24"
                            className="stroke-black fill-none group-hover:fill-[#999] group-active:stroke-indigo-200 group-active:fill-indigo-600 group-active:duration-0 duration-300"
                        >
                            <path
                                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                strokeWidth="1.5"
                            />
                            <path d="M8 12H16" strokeWidth="1.5" />
                            <path d="M12 16V8" strokeWidth="1.5" />
                        </svg>
                    </button>
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
                                                    <th className="px-6 py-3 font-bold text-left uppercase bg-transparent border-b border-gray-200 text-xxs text-slate-400 opacity-70">
                                                        Mã hàng
                                                    </th>
                                                    <th className="px-6 py-3 font-bold text-left uppercase bg-transparent border-b border-gray-200 text-xxs text-slate-400 opacity-70">
                                                        Name & Image
                                                    </th>
                                                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase bg-transparent border-b border-gray-200 text-xxs text-slate-400 opacity-70">
                                                        Price
                                                    </th>
                                                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase bg-transparent border-b border-gray-200 text-xxs text-slate-400 opacity-70">
                                                        Size
                                                    </th>
                                                    <th className="px-6 py-3 pl-2 font-bold text-center uppercase bg-transparent border-b border-gray-200 text-xxs text-slate-400 opacity-70">
                                                        Chất liệu
                                                    </th>
                                                    <th className="px-6 py-3 font-semibold bg-transparent border-b border-gray-200"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {products?.map(
                                                    (product, index) => (
                                                        <tr key={index}>
                                                            <td
                                                                className={`px-6 bg-transparent ${index !== product?.sizes?.length - 1 ? 'border-b' : ''} shadow-transparent`}
                                                            >
                                                                <p className="mb-0 text-sm font-semibold">
                                                                    {
                                                                        product?.series
                                                                    }
                                                                </p>
                                                            </td>
                                                            <td
                                                                className={`p-2 bg-transparent ${index !== product?.sizes?.length - 1 ? 'border-b' : ''} shadow-transparent`}
                                                            >
                                                                <div className="flex px-2">
                                                                    <img
                                                                        src={
                                                                            product?.imageSrc
                                                                        }
                                                                        className="inline-flex items-center justify-center mr-2 h-9 w-9"
                                                                        alt={
                                                                            product?.name
                                                                        }
                                                                    />
                                                                    <div className="my-auto">
                                                                        <h6 className="mb-0 text-sm">
                                                                            {
                                                                                product?.name
                                                                            }
                                                                        </h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td
                                                                className={`p-2 bg-transparent ${index !== product?.sizes?.length - 1 ? 'border-b' : ''} shadow-transparent`}
                                                            >
                                                                <p className="mb-0 text-sm font-semibold">
                                                                    {formatCurrency(
                                                                        product?.price,
                                                                    )}
                                                                </p>
                                                            </td>
                                                            <td
                                                                className={`p-2 bg-transparent ${index !== product?.sizes?.length - 1 ? 'border-b' : ''} shadow-transparent`}
                                                            >
                                                                <span className="text-xs font-semibold">
                                                                    {product?.sizes?.reduce(
                                                                        (
                                                                            accumulator,
                                                                            size,
                                                                        ) =>
                                                                            accumulator +
                                                                            size?.quantity,
                                                                        0,
                                                                    )}
                                                                </span>
                                                            </td>
                                                            <td
                                                                className={`p-2 text-center bg-transparent ${index !== product?.sizes?.length - 1 ? 'border-b' : ''} shadow-transparent`}
                                                            >
                                                                <span className="mr-2 text-xs font-semibold">
                                                                    {
                                                                        product?.composition
                                                                    }
                                                                </span>
                                                            </td>
                                                            <td
                                                                className={`p-2 bg-transparent ${index !== products?.length - 1 ? 'border-b' : ''} shadow-transparent`}
                                                            >
                                                                <Link
                                                                    to={`/dashboard/product/${product?.series}`}
                                                                    onClick={() =>
                                                                        handleClickProductDB(
                                                                            product,
                                                                        )
                                                                    }
                                                                    className="px-6 py-3 mb-0 text-xs font-bold text-center uppercase bg-transparent border-0 rounded-lg text-slate-400"
                                                                >
                                                                    XEM
                                                                </Link>
                                                                <button
                                                                    onClick={() =>
                                                                        handleEditClick(
                                                                            product,
                                                                        )
                                                                    }
                                                                    className="px-6 py-3 mb-0 text-xs font-bold text-center uppercase bg-transparent border-0 rounded-lg text-slate-400"
                                                                >
                                                                    Edit
                                                                </button>
                                                                <button
                                                                    onClick={() =>
                                                                        handleDelete(
                                                                            product,
                                                                        )
                                                                    }
                                                                    className="px-6 py-3 mb-0 text-xs font-bold text-center uppercase bg-transparent border-0 rounded-lg text-slate-400"
                                                                >
                                                                    Xóa
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ),
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalEditProductsDB
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                editedProduct={editedProduct}
                handleEditChange={handleEditChange}
                handleEditSubmit={handleEditSubmit}
            />{' '}
            <ModalAddProductsDB
                isOpen={isModalOpenAdd}
                onRequestClose={() => setIsModalOpenAdd(false)}
                addProduct={addProduct}
                handleAddChange={handleAddChange}
                handleAddSubmit={handleAddSubmit}
            />
        </>
    );
}

export default ProductsDB;

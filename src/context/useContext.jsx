/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from 'axios';
export const context = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        setProducts(response.data);
        setLoading(true);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  console.log(products);
  const value = {
    products, loading
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;

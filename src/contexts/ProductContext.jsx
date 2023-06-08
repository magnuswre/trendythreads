import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
export const ProductContext = createContext()

const ProductContextProvider = ({ children, limit }) => {

  const [data, setData] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/product?limit=${limit}`);
        setData(prevData => [...prevData, ...result.data.slice(prevData.length)]);
        console.log(result.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [limit]);

  const loadMoreProducts = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/api/product?limit=${limit + 4}`);
      setData(result.data);
      console.log(result.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const isLoadMoreDisabled = data.length >= 8;

  const value = {
    data,
    loadMoreProducts,
    isLoadMoreDisabled
  }

  return (
   <ProductContext.Provider value={value}>
      { children }
   </ProductContext.Provider>
  )
}

export default ProductContextProvider
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {

  const [orders, setOrders] = useState([]);
  
  const token = localStorage.getItem('token') 
  const parse = JSON.parse(token)

  useEffect(() => {
    const fetchData = async () => {
      try {
       const result = await axios.get(`http://localhost:8080/api/order/myOrders`,
          {
            headers: {
              Authorization: `Bearer ${parse}`
            }
          }
        );

        setOrders(result.data);
     
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const submitOrder = (cart) => {
    console.log(cart)
    const token = localStorage.getItem('token') 
    const parse = JSON.parse(token)

    const orderRows = cart.map(item => {
      return { 
        product: item.product._id,
        quantity: item.quantity
      }
    })
    
    const fetchData = async () => {
       console.log(orderRows)
        try {
          const result = await axios.post(`http://localhost:8080/api/order/add`, 
             {orderRows},
             {
              headers: {
                Authorization: `Bearer ${parse}`
              }
            })
            // setOrders(result.data)
            console.log(result.data)
          } catch (error) {
          console.log("Error fetching data:", error);
        }
      };
      fetchData();
  }
  
  const value = {
    orders,
    submitOrder
  };

  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;



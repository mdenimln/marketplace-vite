/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useRef } from "react";
const TableCart = ({ products }) => {
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);
  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-cell";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <table className="text-left table-auto border-separate border-spacing-x-5">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((items) => {
            const product = products.find((product) => product.id === items.id);
            return (
              <tr key={items.id}>
                <td>{product.title.substring(0, 10)}</td>
                <td>
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </td>
                <td>{items.qty}</td>
                <td>
                  {(items.qty * product.price).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            );
          })}
        <tr>
          <td colSpan={3}>
            <b>price</b>
          </td>
          <td  ref={totalPriceRef} >           
              <b>
                {totalPrice.toLocaleString("id-ID", {
                style: "currency",
                currency: "USD",
              })}   
              </b>      
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;

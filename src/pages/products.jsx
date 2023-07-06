import { Fragment, useState, useEffect } from "react";
import CartProducts from "../components/Fragments/CartProducts";
import Button from "../components/Elements/Button";

import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.service";

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");
  // lifecycle digmonth
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else{
      window.location.href = "/login";
    }
  }, []);
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);     
    });
  }, []);

  // lifecycle digmonth update
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  const handleAddToCart = (id) => {
    if (cart.find((items) => items.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <Fragment>
      <nav className="fixed w-full top-0 gap-5 flex justify-end items-center bg-blue-500 color-white p-5">
        <h1 className="text-white">{username}</h1>
        <Button classname="bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </nav>
      <div className="flex justify-center p-5 mt-28">
        <div className="flex w-4/6 flex-wrap gap-5 border">
          {products.length > 0 &&
            products.map((product) => (
              <CartProducts key={product.id}>
                <CartProducts.Header image={product.image} />
                <CartProducts.Body name={product.title}>
                  {product.description}
                </CartProducts.Body>
                <CartProducts.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </CartProducts>
            ))}
        </div>
        <div className="w-2/6 border">
          <h1 className="text-3xl text-blue-600 font-bold m-5">card</h1>
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
                  const product = products.find(
                    (product) => product.id === items.id
                  );
                  return (
                    <tr key={items.id}>
                      <td>{product.title.substring(0, 20)}</td>
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
                <td>
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
        </div>
      </div>
    </Fragment>
  );
};
export default ProductsPage;

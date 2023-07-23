import { Fragment, useState, useEffect } from "react";
import CartProducts from "../components/Fragments/CartProducts";
import { getProducts } from "../services/product.service";
// import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layout/Navbar";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
//  useLogin();
  // lifecycle digmonth

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  

  return (
    <Fragment>
      <Navbar/>
      <div className="flex justify-center p-5 mt-28">
        <div className="flex w-4/6 flex-wrap gap-5 border">
          {products.length > 0 &&
            products.map((product) => (
              <CartProducts key={product.id}>
                <CartProducts.Header image={product.image} id={product.id} />
                <CartProducts.Body name={product.title}>
                  {product.description}
                </CartProducts.Body>
                <CartProducts.Footer price={product.price} id={product.id} />
              </CartProducts>
            ))}
        </div>
        <div className="w-2/6 border">
          <h1 className="text-3xl text-blue-600 font-bold m-5">card</h1>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  );
};
export default ProductsPage;

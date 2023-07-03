import { Fragment, useState } from "react";
import CartProducts from "../components/Fragments/CartProducts";
import Button from "../components/Elements/Button";
import Products from "./dbproducts.json"


const email = localStorage.getItem("email");
const ProductsPage = () => {
    const [cart, setCart] = useState([]);
      
    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    }
    const handleAddToCart = (id) => {
        if (cart.find((items) => items.id === id)) {
            setCart(cart.map((item) => 
                    item.id === id ? { ...item, qty: item.qty + 1 } : item
            ));
        } else {
            setCart([...cart, { id, qty: 1 }]);
        }
    }

    return(
        <Fragment>
            <nav className="fixed w-full top-0 gap-5 flex justify-end items-center bg-blue-500 color-white p-5">
                <h1 className="text-white">{email}</h1>
                <Button classname="bg-black" onClick={handleLogout}>Logout</Button>
                
            </nav> 
            <div className="flex justify-center p-5 mt-28">
                <div className="flex w-4/6 flex-wrap gap-5 border">           
                    {Products.map((product) => (
                        <CartProducts key={product.id}>
                            <CartProducts.Header image={product.image} />
                            <CartProducts.Body name={product.name}>{product.description}</CartProducts.Body>
                            <CartProducts.Footer 
                             price={product.price}
                             confId={product.id}
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
                            {cart.map((items) => {
                                const Product = Products.find((product) => product.id === items.id);
                                return (
                                   <tr key={items.id}>
                                        <td>{Product.name }</td>
                                        <td>{Product.price.toLocaleString("id-ID", { 
                                            style: "currency", 
                                            currency: "IDR" }) }</td>
                                        <td>{items.qty }</td>
                                        <td>{(items.qty * Product.price).toLocaleString("id-ID", { style: "currency", currency: "IDR" }) }</td>
                                   </tr> 
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>   
            
        </Fragment>
        
    )
}
export default ProductsPage;
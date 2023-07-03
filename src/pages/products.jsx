import { Fragment, useState } from "react";
import CartProducts from "../components/Fragments/CartProducts";
import Button from "../components/Elements/Button";


const products = [
    {
        id: "1",
        image: "/images/shoes1.jpg",
        name: "Product satu",
        price: 200000,
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio qui quisquam, voluptatibus ipsa dolorem eligendi aut eaque quibusdam maxime officiis sed distinctio totam ipsam possimus id accusantium iusto dignissimos architecto?`
    },
    {
        id: "2",
        image: "/images/shoes1.jpg",
        name: "Product dua",
        price: 300000,
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
        id: "3",
        image: "/images/shoes1.jpg",
        name: "Product tiga",
        price: 400000,
        description: `Optio qui quisquam, voluptatibus ipsa dolorem eligendi aut eaque quibusdam maxime officiis sed distinctio totam ipsam possimus id accusantium iusto dignissimos architecto?`
    },
    {
        id: "4",
        image: "/images/shoes1.jpg",
        name: "Product empat",
        price: 400000,
        description: `Optio qui quisquam, voluptatibus ipsa dolorem eligendi aut eaque quibusdam maxime officiis sed distinctio totam ipsam possimus id accusantium iusto dignissimos architecto?`
    },
    {
        id: "5",
        image: "/images/shoes1.jpg",
        name: "Product lima",
        price: 400000,
        description: `Optio qui quisquam, voluptatibus ipsa dolorem eligendi aut eaque quibusdam maxime officiis sed distinctio totam ipsam possimus id accusantium iusto dignissimos architecto?`
    },
]
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
                    {products.map((product) => (
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
                                const product = products.find((product) => product.id === items.id);
                                return (
                                   <tr key={items.id}>
                                        <td>{product.name }</td>
                                        <td>{product.price.toLocaleString("id-ID", { 
                                            style: "currency", 
                                            currency: "IDR" }) }</td>
                                        <td>{items.qty }</td>
                                        <td>{(items.qty * product.price).toLocaleString("id-ID", { style: "currency", currency: "IDR" }) }</td>
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
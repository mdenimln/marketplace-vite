import { Fragment } from "react";
import CartProducts from "../components/Fragments/CartProducts";
import Button from "../components/Elements/Button";

const products = [
    {
        id: "1",
        image: "/images/shoes1.jpg",
        name: "Product satu",
        price: "Rp. 100.000",
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio qui quisquam, voluptatibus ipsa dolorem eligendi aut eaque quibusdam maxime officiis sed distinctio totam ipsam possimus id accusantium iusto dignissimos architecto?`
    },
    {
        id: "2",
        image: "/images/shoes1.jpg",
        name: "Product dua",
        price: "Rp. 700.000",
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
        id: "3",
        image: "/images/shoes1.jpg",
        name: "Product tiga",
        price: "Rp. 400.000",
        description: `Optio qui quisquam, voluptatibus ipsa dolorem eligendi aut eaque quibusdam maxime officiis sed distinctio totam ipsam possimus id accusantium iusto dignissimos architecto?`
    },
]
const email = localStorage.getItem("email");
const ProductsPage = () => {
    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    }
    return(
        <Fragment>
        <nav className="gap-5 flex justify-end items-center bg-blue-500 color-white p-5">
            <h1 className="text-white">{email}</h1>
            <Button classname="bg-black" onClick={handleLogout}>Logout</Button>
            
        </nav>    
        <div className="flex justify-center py-5 gap-5">           
            {products.map((product) => (
                <CartProducts key={product.id}>
                    <CartProducts.Header image={product.image} />
                    <CartProducts.Body name={product.name}>{product.description}</CartProducts.Body>
                    <CartProducts.Footer price={product.price} />
                </CartProducts>
            ))}
        </div>
        </Fragment>
        
    )
}
export default ProductsPage;
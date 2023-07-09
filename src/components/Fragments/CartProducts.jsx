/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../Elements/Button";

const CartProducts = ({ children }) => {
    return(
        <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between">
            {children}
        </div>
    )
}

const Header = ({image, id}) => {
    return(
        <Link to={`/product/${id}`}>
            <img 
            src={image} 
            alt="product" 
            className="p-8 rounded-t-lg h-60 w-full object-cover" 
            />
        </Link>
    )
}
const Body = ({name, children}) => {
    return(
        <div className="px-5 pb-5 h-full">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white">{name.substring(0, 20)}</h5>
                <p className="text-s font-normal text-white">
                    {children.substring(0, 100)}
                </p>    
            </a>
        </div>
    )
}
const Footer = ({price, handleAddToCart, id}) => {
    return(
        <div className="flex items-center justify-between px-5 py-4">
            <span className="text-xl font-bold text-white">{price.toLocaleString("id-ID", { style: "currency", currency: "USD" })}</span>
            <Button classname="bg-blue-600" onClick={() => handleAddToCart(id)}>Add to cart</Button>
        </div>
    )
}

CartProducts.Header = Header;
CartProducts.Body = Body;
CartProducts.Footer = Footer;
export default CartProducts;
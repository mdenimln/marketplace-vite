/* eslint-disable react/prop-types */
import Button from "../Elements/Button";
const CartProducts = ({ children }) => {
    return(
        <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between">
            {children}
        </div>
    )
}

const Header = ({image}) => {
    return(
        <a href="#">
            <img 
            src={image} 
            alt="product" 
            className="p-8 rounded-t-lg" 
            />
        </a>
    )
}
const Body = ({name, children}) => {
    return(
        <div className="px-5 pb-5 h-full">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white">{name}</h5>
                <p className="text-s font-normal text-white">
                    {children}
                </p>    
            </a>
        </div>
    )
}
const Footer = ({price, handleAddToCart, confId}) => {
    return(
        <div className="flex items-center justify-between px-5 py-4">
            <span className="text-xl font-bold text-white">{price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</span>
            <Button classname="bg-blue-600" onClick={() => handleAddToCart(confId)}>Add to cart</Button>
        </div>
    )
}

CartProducts.Header = Header;
CartProducts.Body = Body;
CartProducts.Footer = Footer;
export default CartProducts;

import Button from "../Elements/Button";

const CartProducts = ({ children }) => {
    return(
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
            {children}
        </div>
    )
}

const Header = () => {
    return(
        <a href="#">
            <img 
            src="/images/shoes1.jpg" 
            alt="product" 
            className="p-8 rounded-t-lg" 
            />
        </a>
    )
}
const Body = () => {
    return(
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white">Product 1</h5>
                <p className="text-s font-normal text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio qui quisquam, voluptatibus ipsa dolorem eligendi aut eaque quibusdam maxime officiis sed distinctio totam ipsam possimus id accusantium iusto dignissimos architecto?
                </p>    
            </a>
        </div>
    )
}
const Footer = () => {
    return(
        <div className="flex items-center justify-between px-5 py-4">
            <span className="text-xl font-bold text-white">Rp 50.000</span>
            <Button classname="bg-blue-600">Add to cart</Button>
        </div>
    )
}

CartProducts.Header = Header;
CartProducts.Body = Body;
CartProducts.Footer = Footer;
export default CartProducts;
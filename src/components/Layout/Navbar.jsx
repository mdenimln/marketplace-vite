import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";

const Navbar = () => {
    const username = useLogin();
    const [totalPrice, setTotalPrice] = useState(0);
    const cart = useSelector((state) => state.cart.data);
    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }
        , 0);
        setTotalPrice(sum);
    }, [cart]);
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      };
    return(
        <nav className="fixed w-full top-0 gap-5 flex justify-end items-center bg-blue-500 color-white p-5">
        <h1 className="text-white">{username}</h1>
        <Button classname="bg-black" onClick={handleLogout}>
          Logout
        </Button>
        <div className="flex bg-black rounded-lg text-white items-center p-2 ml-5">
            {totalPrice}
        </div>
      </nav>
    )
}
export default Navbar;
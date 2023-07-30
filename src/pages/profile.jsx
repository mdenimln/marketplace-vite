import { useLogin } from "../hooks/useLogin";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
    const  username = useLogin();
    const [totalPrice, setTotalPrice] = useState(0);
    const cart = useSelector((state) => state.cart.data);
    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }
        , 0);
        setTotalPrice(sum);
    }, [cart]);
    return (
        <div>
            <h1>Profile</h1>
            Username : {username}
            <h1>Total Price : {totalPrice}</h1>
        </div>
    )
}
export default ProfilePage
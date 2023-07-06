import axios from "axios";
import jwt_decode from "jwt-decode";
export const login = (data, callback) => {
    axios
        .post("https://fakestoreapi.com/auth/login",data)
        .then((response) => {
            callback(true, response.data.token);
        })
        .catch((error) => {
            callback(false, error);
        });
}

export const getUsername = (token) => {
    const decoded = jwt_decode(token);
    return decoded.user;
    
}
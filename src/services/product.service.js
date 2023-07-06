import axios from "axios";

export const getProducts = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      callback(res.data);
      // console.log(response.data.map((product) => product.title));
    })
    .catch((error) => {
      console.log(error);
    });
};


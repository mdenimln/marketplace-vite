import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { login } from "../../services/auth.service";
import { useState } from "react";
// import { useEffect } from "react";
// import { redirect } from "react-router-dom";
const FormLogin = () => {

  const [loginField, setLoginField] = useState("")
  const handleLogin = (e) => {
    e.preventDefault(); 
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // window.location.href = "/products";
    const data = {
      username : e.target.username.value,
      password : e.target.password.value,
    }
    login(data, (status, response) => {
      if(status){
       localStorage.setItem("token", response);
       window.location.href = "/products";
      } else{
        setLoginField(response.response.data);
      }
      
    });

  }
  // useEffect(() => {
  //   usernameRef.current.focus();
  // })
    return(
        <form onSubmit={handleLogin}>
        <InputForm 
          label="username" 
          type="username" 
          placeholder="john" 
          name="username"
          // ref={usernameRef}
          >
        </InputForm>
        <InputForm 
          label="Password" 
          type="password" 
          placeholder="Enter your password" 
          name="password">
        </InputForm>
        <Button classname="bg-blue-500 w-full" type="submit">Login</Button>
        {loginField && <p className="text-red-500">{loginField}</p>}
      </form> 
    )
}

export default FormLogin;
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
// import { redirect } from "react-router-dom";
const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault(); 
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/products";
  }
    return(
        <form onSubmit={handleLogin}>
        <InputForm 
          label="Email" 
          type="email" 
          placeholder="Enter your email" 
          name="email">
        </InputForm>
        <InputForm 
          label="Password" 
          type="password" 
          placeholder="Enter your password" 
          name="password">
        </InputForm>
        <Button classname="bg-blue-500 w-full" type="submit">Login</Button>
      </form>
    )
}

export default FormLogin;
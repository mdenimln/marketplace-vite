import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
const FormLogin = () => {
    return(
        <form action="">
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
        <Button classname="bg-blue-500 w-full">Login</Button>
      </form>
    )
}

export default FormLogin;
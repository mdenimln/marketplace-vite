import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
const FormLogin = () => {
    return(
        <form action="">
        <InputForm 
          label="Full Name" 
          type="Text" 
          placeholder="Enter your Full Name" 
          name="fullname">
        </InputForm>
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
        <InputForm 
          label="Confirm Password" 
          type="password" 
          placeholder="Enter your password" 
          name="Confirm Password">
        </InputForm>
        <Button classname="bg-blue-500 w-full">Register</Button>
      </form>
    )
}

export default FormLogin;
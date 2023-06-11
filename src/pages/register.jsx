import AuthLayouts from "../components/Layout/AuthLayouts"
import FormRegister from "../components/Fragments/FormRegister"

AuthLayouts
const RegisterPage = () => {
    return(
       <AuthLayouts title="Register" type="register">
        <FormRegister />
       </AuthLayouts>
    )
}

export default RegisterPage;
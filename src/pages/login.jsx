import AuthLayouts from "../components/Layout/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
AuthLayouts
const LoginPage = () => {
    return(
       <AuthLayouts title="Login" type="login">
        <FormLogin />
       </AuthLayouts>
    )
}

export default LoginPage;
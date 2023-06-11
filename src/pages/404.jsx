import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError();
    return(
        <div className="flex justify-center items-center min-h-screen flex-col gap-3">
            <h1 className="text-3xl font-bold">404 Ops..</h1>
            <p>Sorry, a unexpected error has occured</p>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}
export default ErrorPage;
import { Navigate } from "react-router-dom";
import useAuthHook from "../hooks/useAuthHook";
import { AuthGuardPropsType } from "../types/types";
import { replace } from "formik";

function AuthGuard({ children }: AuthGuardPropsType) {
    const { userAuth } = useAuthHook();
    if (userAuth) {
        return children;
    } else {
        return <Navigate to='/login' replace={true} />;
    }
}

export default AuthGuard;
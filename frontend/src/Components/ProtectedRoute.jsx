import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import Cookies from "js-cookie";
import { refreshAccessToken } from "../api";
import Loading from "./Loading"

function ProtectedRoute({ children }){
    const [isAuthenticated, setIsAuthenticated] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const checkAuth = async () => {
            let access_token = Cookies.get("access_token")
            if(!access_token) {
                access_token = await refreshAccessToken()
                if(access_token) {
                    Cookies.set('access_token', access_token, { expires:  1 / 24})
                }
            }
            setIsAuthenticated(!!access_token)
            setLoading(false)
        }
        checkAuth();
    }, [])
    if(loading) {
        return <Loading />
    }
    return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute

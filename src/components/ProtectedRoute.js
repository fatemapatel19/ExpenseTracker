import React from "react";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ children }) {
    const user = JSON.parse(localStorage.getItem("user")) // by this it will check if user eists otherwise it will navigate to login page
    if (user) {
        
        return <Navigate to="/GetStarted" />;
    }
    else {
        
        return children
    }
}
export default ProtectedRoute;
// if user not loged in go back to login and cant see home page 
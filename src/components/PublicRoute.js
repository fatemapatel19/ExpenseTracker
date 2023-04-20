import React from "react";
import { Navigate } from "react-router-dom";
function PublicRoute({ children }) {
    const user = localStorage.getItem("user");
    if (user) {
      
        return <Navigate to="/GetStarted" />;
       
    }
    else {
        return children;
    }
}
export default PublicRoute;
// once in home page cant go back to login or register page so only logout 
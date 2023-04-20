import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import GetStarted from "./pages/GetStarted";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import { useSelector } from "react-redux";
import { Loader } from "@mantine/core";

function App() {
  const { loading } = useSelector(state => state.alerts);
  return (

    <div className="App">

      {loading && (<div className="Loader">
        <Loader />
      </div>)}
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
          <Route path="/GetStarted" element={<PublicRoute> <GetStarted /> </PublicRoute>} />
          <Route path="Register" element={<PublicRoute> <Register /> </PublicRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

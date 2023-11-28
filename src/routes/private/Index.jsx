import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useJwt } from "react-jwt";

export default function Index() {
    const { decodedToken, isExpired } = useJwt(localStorage.getItem("jwt"));
    let token=localStorage.getItem("jwt");

    return token && !isExpired ? <Outlet /> : <Navigate to={"/login"} />
}

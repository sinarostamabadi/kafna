import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function Index() {
    let token=localStorage.getItem("jwt");
    return token ? <Outlet /> : <Navigate to={"/login"} />
}

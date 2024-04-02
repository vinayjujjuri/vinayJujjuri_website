import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../navbar/navbar";

function Router() {
    return (
        <>
            <BrowserRouter>
            <Navbar/>
            </BrowserRouter>
        </>);
}

export default Router;
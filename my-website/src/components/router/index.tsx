import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../navbar/navbar";
import { LeftCardComponent } from "../leftCard/leftcard";

function Router() {
    return (
        <>
            <BrowserRouter>
            <Navbar/>
            <LeftCardComponent/>
            </BrowserRouter>
        </>);
}

export default Router;
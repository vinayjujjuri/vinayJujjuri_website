import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../navbar/navbar";
import { LeftCardComponent } from "../leftCard/leftcard";
import { Layout } from "../layout/layout";
import AboutMeComponent from "../aboutMe/aboutMe";

function Router() {
    return (
        <>
            <BrowserRouter>
            {/* <Navbar/> */}
            <Layout>
                <Routes>
                <Route path="/vinayJujjuri_website" element={<AboutMeComponent/>} />
                </Routes>
            </Layout>
            </BrowserRouter>
        </>);
}

export default Router;
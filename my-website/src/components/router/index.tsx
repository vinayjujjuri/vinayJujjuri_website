import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../navbar/navbar";
import { LeftCardComponent } from "../leftCard/leftcard";
import { Layout } from "../layout/layout";
import AboutMeComponent from "../aboutMe/aboutMe";
import { useState } from "react";
import PortfolioComponent from "../portfolio/portfolio";
import { ResumeComponent } from "../resume/resume";

function Router() {
    const [componentName, setComponentName] = useState<string>("about me");

    const onClickChangeTab = (name:string) => {
        setComponentName(name);
    }

    // Function to determine which component to render
    const renderComponent = () => {
        switch (componentName) {
            case "resume":
                return <ResumeComponent/>;
            case "contacts":
                return <p>Contact</p>;
                case "works":
                return <PortfolioComponent/>;
            case "about me":
                return <AboutMeComponent />;
            default:
                return <AboutMeComponent />;
        }
    };



    return (
        <>
            <BrowserRouter>
            <Layout setComponentName={setComponentName} onClick={onClickChangeTab} componentName={componentName}>
                {renderComponent()}
            </Layout>
            </BrowserRouter>
        </>);
}

export default Router;
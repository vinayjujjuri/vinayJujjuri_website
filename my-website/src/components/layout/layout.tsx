import React from "react";
import { LeftCardComponent } from "../leftCard/leftcard";

interface LayoutProps {
    childern:React.ReactNode
}
export function Layout(props : LayoutProps) {
    return (
        <div>
            <LeftCardComponent/>
            {props.childern}
            
        </div>
    )
}
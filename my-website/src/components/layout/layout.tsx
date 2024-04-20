import React from "react";
import { LeftCardComponent } from "../leftCard/leftcard";
import styles from './layout.module.css';
import { RightCardComponent } from "../rightCard/rightCard";

interface LayoutProps {
    children?: React.ReactNode; 
}

export function Layout(props: LayoutProps) {
    return (
        <div className={styles.layoutContainer}>
            <LeftCardComponent />
            <main>{props.children}</main> 
            <RightCardComponent/>
        </div>
    );
}

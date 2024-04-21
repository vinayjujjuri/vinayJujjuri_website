import React from "react";
import { LeftCardComponent } from "../leftCard/leftcard";
import styles from './layout.module.css';
import { RightCardComponent } from "../rightCard/rightCard";

interface LayoutProps {
    children?: React.ReactNode;
    onClick?: (name: string) => void;
    setComponentName: React.Dispatch<React.SetStateAction<string>>;
    componentName: string;
}

export function Layout(props: LayoutProps) {
    return (
        <div className={styles.layoutContainer}>
            <div className={styles.leftCard}>
                <LeftCardComponent />
            </div>
            <main>{props.children}</main>
            <div className={styles.rightCard}>
                <RightCardComponent setComponentName={props.setComponentName} onClick={props.onClick} componentName={props.componentName} />

            </div>
        </div>
    );
}

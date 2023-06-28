import Link from "next/link";
// import Image from "next/image";

import styles from "./card.module.css";
import React from "react";

export function Card({ children, className="" }: { children: React.ReactNode } & React.ComponentProps<"div">) {
    return (
        <div className={[styles.card, className].join(" ")}>
            {children}
        </div>
    );
}

export function CardTitle({ children, className="", center = false }: { children: React.ReactNode, center?: boolean } & React.ComponentProps<"div">) {
    return (
        <div className={[styles.header, center ? styles.center : "" , className].join(" ")}>
            {children}
        </div>
    );
}
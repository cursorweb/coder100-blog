import styles from "./card.module.css";

export function Card({ children, className="" }: { children: React.ReactNode } & React.ComponentPropsWithoutRef<"div">) {
    return (
        <div className={[styles.card, className].join(" ")}>
            {children}
        </div>
    );
}

export function CardTitle({ children, className="", center = false }: { children: React.ReactNode, center?: boolean } & React.ComponentPropsWithoutRef<"div">) {
    return (
        <div className={[styles.header, center ? styles.center : "" , className].join(" ")}>
            {children}
        </div>
    );
}

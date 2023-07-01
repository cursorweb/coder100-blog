"use client";
import styles from "./styles.module.css";
import { useState, useRef } from "react";

export default function Keys() {
    const [event, setEvent] = useState<React.KeyboardEvent | null>(null);
    const [isFocused, setIsFocused] = useState(true);
    const input = useRef<HTMLInputElement>(null);

    return (
        <>
            <div
                onClick={() => input.current?.focus()}
                className={
                    styles.div
                    + " "
                    + (isFocused ? styles.focused : styles.unfocused)
                }
            >
                Click here, and type a key.
                {
                    event
                        ? <div className={styles.info}>
                            <div><strong>Key</strong>: {event.key}</div>
                            <div><strong>Code</strong>: {event.code}</div>
                            <div><strong>KeyCode</strong>: {event.keyCode}</div>
                        </div>
                        : null
                }
            </div>

            <div>
                <pre className={styles.pre}><code>
                    {JSON.stringify(event, ["key", "code", "which", "keyCode", "altKey", "ctrlKey", "metaKey"], 4)}
                </code></pre>
            </div>

            <input
                ref={input}
                onKeyDown={e => setEvent(e)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={styles.input}
                autoFocus
            />
        </>
    );
}
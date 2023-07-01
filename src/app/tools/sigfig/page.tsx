// "use client";
// import { useState } from "react";

export default function SigFig() {
    return <h1>haha nope not yet</h1>;
    /*
    const [number, setNumber] = useState("0");
    const [sigFigs, setSigFigs] = useState(0);
    const [result, setResult] = useState(0);

    function convertSigFigs() {
        // 1. get number and round (if needed)
        const numberArr = number.replace(/\./, "").split("");
        if (number.length > sigFigs) {
            for (let i = numberArr.length - 1; i >= sigFigs; i--) {
                numberArr[i] = "0";
            }
        }

        // 2. pad with zeroes

    }

    return (
        <>
            <h1>Sig Fig Calculator</h1>

            <div>
                <label>
                    Your Number:&nbsp;
                    <input
                        onKeyDown={e => {
                            if (e.key == "Enter") convertSigFigs();
                        }}
                        type="number"
                        onChange={e => setNumber(e.target.value)}
                    />
                </label>
            </div>

            <div>
                <label>
                    Significant Figures:&nbsp;
                    <input
                        onKeyDown={e => {
                            if (e.key == "Enter") convertSigFigs();
                        }}
                        onChange={e => setSigFigs(Number(e.target.value))}
                    />
                </label>
            </div>

            <button onClick={() => convertSigFigs()}>Convert</button>

            <div>{result}</div>
        </>
    );
    */
}
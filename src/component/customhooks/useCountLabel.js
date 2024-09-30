import React from "react";
import { useState } from "react";

function LableCount(props) {
    const { coutnProps } = props;
    const [prevCount, setPrevCount] = useState(coutnProps);
    const [trend, setTrend] = useState(null);

    if (prevCount !== coutnProps) {
        setPrevCount(coutnProps);
        setTrend(coutnProps > prevCount ? "increment" : "decrement")
    }
    return (
        <div>
            <h1 className="text-2xl font-bold">LableCount</h1>
            <h1>{coutnProps}</h1>
            {trend && <>
                <h1>this is {trend}</h1>
            </>}
        </div>
    )
}
export default LableCount;
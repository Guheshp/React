import React, { useState } from "react";
import UseState from "../UseStateExample";

function UseStateHook() {
    const [color, setColor] = useState("red")
    // console.log(color)
    const ChangeGreen = () => {
        return setColor("Green")
    }
    const ChangeYellow = () => {
        return setColor("Blue")
    }
    const ChangeBlue = () => {
        return setColor("Yellow")
    }
    const ChangeBrown = () => {
        return setColor("Brown")
    }
    return (
        <div className=" mt-20">
            <h1 className="text-center py-3 text-2xl">React Hooks <span className="text-orange-600">In React, a hook is a special function that lets you "hook into" React features, such as state and lifecycle methods, within functional components</span> </h1>
            <div className="text-center ">

                <h1 className="text-3xl font-semibold">My favorite color is "{color}"!</h1>
                <div className="py-5">
                    <button type="button" className="border border-green-900 p-1 bg-green-300 text-green-950 rounded-lg m-2" onClick={ChangeGreen}>Green</button>
                    <button type="button" className="border border-green-900 p-1 bg-blue-300 text-green-950 rounded-lg m-2" onClick={ChangeBlue}>Blue</button>
                    <button type="button" className="border border-green-900 p-1 bg-yellow-200 text-green-950 rounded-lg m-2" onClick={ChangeYellow}>Yellow</button>
                    <button type="button" className="border border-green-900 p-1 bg-red-900 text-white rounded-lg m-2" onClick={ChangeBrown}>Brown</button>
                </div>
            </div>

            <div className="text-center pt-10">
                <h1 className="text-5xl font-semibold border-dashed border-2 border-sky-500">useState: <span className="text-xl align-middle">It is react hook let you to ADD <span className="text-red-600">"STATE VARIABLE"</span>our Component.</span></h1>
                <UseState />
            </div>
        </div>

    )
}

export default UseStateHook;
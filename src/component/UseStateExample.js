import React, { useState } from "react";
import LableCount from "./customhooks/useCountLabel";

function createTodos() {
    const initialToDos = [];
    for (let i = 0; i < 10; i++) {
        initialToDos.push({
            id: i,
            text: 'item ' + (i + 1)
        })
    }
    return initialToDos
}

function UseState() {
    const [count, setCount] = useState(0)
    const [age, setAge] = useState(22)
    const [reactJs, setReactJs] = useState("React js")
    const [todo, setTodos] = useState(createTodos)
    const [text, setText] = useState(' ')

    const Increment = () => {
        setCount(count + 1)
    }

    const Decerement = () => {
        setCount(count - 1)
        if (count <= 0) {
            setCount(0)
        }
    }
    const IncreaseAge = () => {
        setAge(age => age + 1) //this is updater function 
    }
    const DecreaseAge = () => {
        setAge(age => age - 1)
        if (age <= 0) {
            setAge(0)
        }
    }

    return (
        <div className="pt-10 text-center">
            <h1 className="text-xl border-b-2 inline ">example for use state </h1>
            <div className=" border-b-2 border-y-orange-300 py-2">
                <p className="text-red-800">example 1</p>
                <h2 className="text-2xl">You Pressed me "{count}" times!</h2>
                <button type="button" className="bg-slate-500 rounded text-white border-black p-1 mt-5 mx-2" onClick={Increment}>Increase</button>
                <button type="button" className="bg-slate-500 rounded text-white border-black p-1 mt-5 mx-2" onClick={Decerement}>Decerement</button>

                <LableCount coutnProps={count} />
            </div>

            <div className="pt-10 border-b-2 pb-2 border-orange-300">
                <p className="text-red-800">example 2 //  updater function</p>
                <h2 className="text-2xl">You Age is "{age}" !</h2>
                <button type="button" className="bg-slate-500 rounded text-white border-black p-1 mt-5 mx-2" onClick={() => {
                    IncreaseAge()
                    IncreaseAge()
                    IncreaseAge()
                }}>+3</button>
                <button type="button" className="bg-slate-500 rounded text-white border-black p-1 mt-5 mx-2" onClick={() => {
                    DecreaseAge()
                }}>-1</button>
            </div>

            <div className="pt-10 border-b-2 pb-2 border-orange-300">
                <p className="text-red-800">example 3 </p>
                <h2 className="text-2xl">I love "{reactJs}" !</h2>
                <input type="text" className="border border-black" value={reactJs} onChange={(e) => {
                    setReactJs(e.target.value)
                }} />
            </div>

            <div className="pt-10 border-b-2 pb-2 border-orange-300">
                <p className="text-red-800">example 4 </p>
                {/* <h2 className="text-2xl">I love "{reactJs}" !</h2> */}
                <input type="text" className="border border-black" value={text} onChange={(e) => {
                    setText(e.target.value)
                }} />

                <button className="bg-slate-500 rounded-sm m-2" onClick={() => {
                    setText(" ")
                    setTodos([{
                        id: todo.length,
                        text: text
                    }, ...todo])
                }}>Add</button>

                <ul>
                    {todo.map(item => (
                        <li key={item.id}>
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>



        </div >
    )
}

export default UseState
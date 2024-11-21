import React, { useState } from 'react';

const initialList = ["ONE", "TWO", "THREE"];
const ListProblem = () => {
    const [list, setList] = useState(initialList);
    const [value, setValue] = useState("");

    return (
        <div className='text-center'>

            <div>
                <input type="text"
                    className='border border-black p-2 m-3'
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                />
                <button className='bg-black text-white p-3'
                    onClick={() => {
                        if (value.trim()) {
                            setList([...initialList, value])
                            setValue("")
                        }
                    }}
                >add</button>
            </div>

            {list.map((data, index) => (
                <h1 key={index}>{data}</h1>
            ))}
        </div>
    );
};

export default ListProblem;

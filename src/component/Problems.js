import React, { useState } from 'react'
import { explorer } from './utils/Helper'


const Problems = () => {
    console.log(explorer)
    const items = explorer.items
    console.log("items", items)
    const [root, setRoot] = useState(false)

    const [nextedFolder, setNextedFolder] = useState({})

    const [ojb, setObj] = useState()

    const rootTogle = () => {
        setRoot(!root)
    }
    const nextedTogle = (id) => {
        setNextedFolder(pervState => (
            {
                ...pervState,
                [id]: !pervState[id]
            }
        ))
    }

    const [input, setInput] = useState(true)
    const [value, setValue] = useState("")
    const [explore, setExplore] = useState(explorer);

    const handleSubmit = () => {
        console.log(value)

        setValue(" ")
    }

    return (
        <div className=' ml-20 mt-12'>
            <p>vs code File structure</p>
            <p>File dropdown</p>
            <span className='px-12'><button className='bg-black text-white p-1 rounded px-2' >addfolder</button><button className='bg-black text-white p-1 rounded px-2 mx-3'>add nexted folder</button></span>

            {input &&
                <>
                    <input type="text" className=' border border-black p-2' value={value} onChange={(e) => setValue(e.target.value)} />
                    <button type='submit' className='bg-black p-2 text-white mx-3 rounded' onClick={handleSubmit}>Add</button>
                </>
            }

            <p onClick={rootTogle} role='button'>🗂️{explorer.name} </p>
            {root &&
                (
                    <>
                        {
                            items.map(data => (
                                <div key={data.id} className='ml-3 border m-1'>
                                    <p onClick={() => nextedTogle(data.id)} role='button'>{data.name}</p>
                                    {nextedFolder[data.id] && (
                                        <>
                                            <div className={'ml-4 border '}>
                                                {data.items.map(data => (
                                                    <div className=' '>
                                                        <p>{data.name}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))
                        }
                    </>
                )
            }

        </div>

    )
}

export default Problems

import React, { useRef, useState } from 'react'
import { commentData } from './utils/Helper'
import { ImPushpin } from 'react-icons/im'

const CommentProblem = () => {
    const value = useRef(null)
    const name = useRef(null)
    const [box, setBox] = useState({})
    const [comments, setComments] = useState(commentData)

    const AddReply = (id) => {
        setBox(prev => ({ ...prev, [id]: !prev[id] })) // Toggle box state for each comment ID
    }

    const handlesubmit = async (id) => {
        const newObject = {
            name: name.current.value,
            comment: value.current.value
        }

        // Update the comments state to include the new reply
        setComments(prevComments => prevComments.map((comment) => {
            if (comment.id === id) {
                return {
                    ...comment,
                    reply: [...(comment.reply || []), newObject]
                }
            }
            return comment
        }))

        name.current.value = ""
        value.current.value = ""
    }

    return (
        <div className='ps-32'>
            <h1 className='text-2xl font-bold text-red-600'>Comment Problem</h1>
            <div>
                {comments.map(data => (
                    <div key={data.id} className='border m-3 p-2'>
                        <div className='flex gap-3'>
                            <p>Name: {data?.name}</p>
                            <p>Comment: {data?.comment}</p>

                            <button
                                type='button'
                                className='bg-black p-2 rounded-md text-white'
                                onClick={() => AddReply(data.id)}
                            >
                                {box[data.id] ? 'Cancel Reply' : 'Add Reply'}
                            </button>

                            {box[data.id] && (
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="text"
                                        className='border border-black p-2'
                                        placeholder='Write your reply...'
                                        ref={value}
                                    />
                                    <input
                                        type="text"
                                        className='border border-black p-2'
                                        placeholder='Write your name...'
                                        ref={name}
                                    />
                                    <button
                                        type='button'
                                        className='bg-black p-2 text-white mx-4 rounded'
                                        onClick={() => handlesubmit(data.id)}
                                    >
                                        Submit
                                    </button>
                                </form>
                            )}
                        </div>

                        <h2 className='text-xl font-semibold'>Replies</h2>
                        {data?.reply?.map((reply, index) => (
                            <div key={index} className='ms-11 m-3'>
                                <p><span>{index + 1}.</span> Name: {reply.name}</p>
                                <p>Comment: {reply.comment}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CommentProblem

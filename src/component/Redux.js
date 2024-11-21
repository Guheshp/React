import React, { useEffect } from 'react'
import useFetchUserData from './customhooks/useFetchUserData'
import { useDispatch, useSelector } from 'react-redux'
import { addUsers, removeUser } from './redux/useSlice'

const Redux = () => {
    const { userData } = useFetchUserData()
    const dispatch = useDispatch()

    const data = useSelector((store) => store.user.user)
    console.log("redux data", data)
    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }
    useEffect(() => {
        if (data && data.length > 0) {
            dispatch(addUsers(data));
        }
    }, [data, dispatch]);


    return (
        <div className='text-center'>
            {data && data?.length > 0 &&
                data?.map((data, index) => {
                    return (
                        <div key={data?.id} className='m-3 flex gap-6 justify-center'>
                            <p>{data?.name}</p>
                            <p role='button' className='text-red-700' onClick={() => deleteUser(data?.id)}>delete</p>
                        </div>
                    )
                })}
        </div>
    )
}

export default Redux

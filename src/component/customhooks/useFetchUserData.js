import React, { useEffect, useState } from 'react'
import { USERDATA_API } from '../utils/Helper'
import { useDispatch } from 'react-redux'
import { addUsers } from '../redux/useSlice'

const useFetchUserData = () => {
    const dispatch = useDispatch()
    const [userData, serUserData] = useState([])
    const handleUser = async () => {
        try {
            const res = await fetch(USERDATA_API)
            const json = await res.json()
            const data = json
            console.log("data", data)
            dispatch(addUsers(data))
            serUserData(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        handleUser()
    }, [])
    return { userData }
}

export default useFetchUserData

import { createSlice } from "@reduxjs/toolkit";

const useSlice = createSlice({
    name: "user",
    initialState: {
        user: []
    },
    reducers: {
        addUsers: (state, action) => {
            state.user = action.payload
        },
        removeUser: (state, action) => {
            state.user = state.user.filter(user => user.id !== action.payload);
        }
    }
})
export const { addUsers, removeUser } = useSlice.actions
export default useSlice.reducer
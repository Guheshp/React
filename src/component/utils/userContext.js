import { createContext } from "react";

const userContext = createContext({
    loggedIn: "default User"
})

export default userContext;
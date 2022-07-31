import {createContext, useState} from 'react';

const UserContext = createContext();

const User = {
    firstName: "Waldo",
    lastName: "Faldo",
    email: "waldofaldo@gmail.com",
    password: "TGIF",
    address: "123 E Waldo St",
    state: "Illonois",
    city: "Chicago",
    creditcard: 8888888888888888,
    cart:[]
}

export function UserProvider({children}){
    const [user,setUser] = useState(User);
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    //We can add state variables here that can now be passed to the children
    return (
        <UserContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn}}>{children}</UserContext.Provider>
    )
}

export default UserContext;
import {createContext} from 'react';

const UserContext = createContext();

//Here we will have a User object, which will include Email, First Name, Last Name, Password, Address, Saved Billing information - we can use this object to verify login, and when login is verified, we can optionally auto-fill the checkout form
//We will also store the User's Cart in here (perhaps as part of the user object?) - this is to reflect how data might be packaged from a server

export function UserProvider({children}){
    //We can add state variables here that can now be passed to the children
    return (
        <UserContext.Provider value={null}>{children}</UserContext.Provider>
    )
}
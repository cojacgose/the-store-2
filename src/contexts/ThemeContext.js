import {createContext} from 'react';

const ThemeContext = createContext();

//Can pass various colors and such into styled components - not a priority. Possible idea, have a controlled input where the user can set a primary, secondary, and tertiary hex color for the themes.

export function ThemeProvider({children}){
    //We can add state variables here that can now be passed to the children
    return (
        <ThemeContext.Provider value={null}>{children}</ThemeContext.Provider>
    )
}
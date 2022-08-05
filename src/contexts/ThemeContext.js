import {createContext} from 'react';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

const ThemeContext = createContext();



const ColorProvider = (props) =>{
    const [primary,setPrimary]=useState();
    const [secondary,setSecondary]=useState();
    const [tertiary,setTertiary]=useState();
    <ThemeContext.Provider value={{primary,secondary,tertiary,setPrimary,setSecondary,setTertiary}}>
        <ThemeProvider>
            {props.children}
        </ThemeProvider>
    </ThemeContext.Provider>
}

export {ColorProvider,ThemeContext}
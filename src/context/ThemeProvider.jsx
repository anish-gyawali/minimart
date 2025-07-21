import { ThemeContext } from "./ThemeContext";
import { useState } from "react";
//2. Step Two creating a Provider
export const ThemeProvider = ({children})=>{
    const[theme, setTheme] = useState('light')
    //Toggle Function
    const themeToggle =()=>{
        setTheme(theme === 'light' ? 'dark': 'light') // Ternary Operator
    }
    // 3. Passing Value to Provider
    return(
        <ThemeContext.Provider value = {{theme, themeToggle}}>
            {children}
        </ThemeContext.Provider>
    )
}


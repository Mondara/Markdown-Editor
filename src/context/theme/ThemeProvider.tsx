import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext, initialThemeState, ThemeType } from './ThemeContext';
import { setItem } from '../../utilities_functions'

export const useThemeContext = () => {
    return useContext(ThemeContext);
}

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeType>(initialThemeState.theme)

    const toggleTheme = () => {
        return theme === "dark" ? setTheme('light') : setTheme('dark');
    }

    useEffect(() => {
        setItem('theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }} >
            <div className={`${theme}`}>{children}</div>
        </ThemeContext.Provider>
    )
}

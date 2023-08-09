import React from "react";
import { getItem } from '../../utilities_functions'

export type ThemeType = 'dark' | 'light';

interface IThemeContext {
    theme: ThemeType;
    toggleTheme: () => void;
}

export const initialThemeState: IThemeContext = {
    theme: (getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) ? 'dark' : 'light',
    toggleTheme: () => { }

}


export const ThemeContext = React.createContext<IThemeContext>(initialThemeState);


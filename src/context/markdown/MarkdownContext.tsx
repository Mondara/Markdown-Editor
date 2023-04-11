import React from "react";
import data from '../../assets/data.json';
import { getDate, getItem, setItem } from '../../utilities';

const initialState = {
    docs: [...data],
    currDoc: data[0],
    handleCurrDocChange: (idx: number) => { },
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => { },
    saveDoc: () => { },
    deleteDoc: () => { },
    newDoc: (name?: string) => { },
    updateDoc: (name: string) => { }
}

export const MarkdownContext = React.createContext(initialState);


import React from 'react';

import data from '../../data/data.json';

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


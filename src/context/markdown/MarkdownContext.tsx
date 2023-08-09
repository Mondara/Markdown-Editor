import React from 'react';

import data from '../../data/data.json';
import { MarkDownContextType } from '../../types';



const initialState: MarkDownContextType = {
    docs: [...data],
    currDoc: data[0],
    handleCurrDocChange: () => { },
    handleChange: () => { },
    saveDoc: () => { },
    deleteDoc: () => { },
    newDoc: () => { },
    updateDoc: () => { },
    uploadFile: () => { },
    downloadFile: () => { },
}

export const MarkdownContext = React.createContext(initialState);


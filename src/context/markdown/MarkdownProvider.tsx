import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import data from '../../assets/data.json';
import { Doc } from '../../types';
import { getDate, getItem, setItem } from '../../utilities';
import { MarkdownContext } from './MarkdownContext';

export const MarkdownProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [docs, setDocs] = React.useState<Doc[]>(getItem('docs') ?? [...data]);
    const [currDoc, setCurrDoc] = React.useState<Doc>(getItem('currDoc') ?? data[0]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setCurrDoc((doc) => ({ ...doc, content: e.target.value }))

    const handleCurrDocChange = (idx: number) => {
        if (currDoc.id !== docs[idx].id) {
            setCurrDoc(docs[idx]);
        }
    }

    const newDoc = (name?: string) => {
        const newDoc: Doc = {
            id: uuidv4(),
            name: name ? name : "Untitled",
            createdAt: getDate(),
            content: ""
        };

        setCurrDoc(newDoc);
        setDocs((prevDoc) => [newDoc, ...prevDoc]);

        return newDoc;
    }

    const deleteDoc = () => {
        const updatedDocs = docs.filter((doc) => doc.id !== currDoc.id)
        setCurrDoc(updatedDocs.length === 0 ? newDoc("") : updatedDocs[0])
        setDocs(updatedDocs);
    }

    const saveDoc = () => {
        if(docs.length === 0) {
            setDocs([currDoc]);
        } else {
            const updatedDocs = docs.map((doc) => doc.id === currDoc.id ? currDoc : doc)
            setDocs(updatedDocs);
        }
    }

    const updateDoc = (name: string) => {
        setCurrDoc(() => ({
            ...currDoc,
            name: name,
        }))
    }

    React.useEffect(() => {
        setItem('docs', docs);
        setItem('currDoc', currDoc);

    }, [docs, currDoc]);

    return (
        <MarkdownContext.Provider value={{ docs, currDoc, handleCurrDocChange, handleChange, saveDoc, deleteDoc, newDoc, updateDoc }}>
            {children}
        </MarkdownContext.Provider>
    );
}


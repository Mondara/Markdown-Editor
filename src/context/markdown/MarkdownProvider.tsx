import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

import data from '../../data/data.json';
import { Doc, FileState } from '../../types';
import { getDate, getItem, setItem } from '../../utilities_functions';
import { MarkdownContext } from './MarkdownContext';

export const useMarkdownContext = () => {
    return React.useContext(MarkdownContext)
}

export const MarkdownProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [docs, setDocs] = React.useState<Doc[]>(getItem('docs') ?? [...data]);
    const [currDoc, setCurrDoc] = React.useState<Doc>(getItem('currDoc') ?? data[0]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setCurrDoc((doc) => ({ ...doc, content: e.target.value }))

    const handleCurrDocChange = (idx: number) => {
        if (currDoc.id !== docs[idx].id) {
            setCurrDoc(docs[idx]);
        }
    }

    const newDoc = (doc?: Partial<Doc>) => {
        const newDoc: Doc = {
            id: uuidv4(),
            name: doc?.name || "Untitled",
            createdAt: doc?.createdAt || getDate(),
            content: doc?.content || ""
        };

        setCurrDoc(newDoc);
        setDocs((prevDoc) => [newDoc, ...prevDoc]);

        toast.success(`[${newDoc.name}] has been created.`)

        return newDoc;
    }

    const uploadFile = (file: FileState) => {

        const newDoc: Doc = {
            id: uuidv4(),
            name: file.name,
            createdAt: getDate(file.createdAt),
            content: file.content?.toString()
        };

        setCurrDoc(newDoc);
        setDocs((prevDoc) => [newDoc, ...prevDoc]);

        toast.success(`Uploaded file [${file.name}]`)
    }

    const downloadFile = (file: Doc) => {
        const blob = new Blob([file.content], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.download = `[${file.name}.md]`;
        link.href = url;
        link.click();
    }

    const deleteDoc = () => {
        toast.success(`[${currDoc.name}] has been Deleted.`)

        const updatedDocs = docs.filter((doc) => doc.id !== currDoc.id)
        setCurrDoc(updatedDocs.length === 0 ? newDoc() : updatedDocs[0])
        setDocs(updatedDocs);

    }

    const saveDoc = () => {
        if (docs.length === 0) {
            setDocs([currDoc]);
        } else {
            const updatedDocs = docs.map((doc) => doc.id === currDoc.id ? currDoc : doc)
            setDocs(updatedDocs);
        }

        toast.success(`[${currDoc.name}] has been updated.`)
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
        <MarkdownContext.Provider value={{ docs, currDoc, handleCurrDocChange, handleChange, saveDoc, deleteDoc, newDoc, updateDoc, uploadFile, downloadFile }}>
            {children}
        </MarkdownContext.Provider>
    );
}


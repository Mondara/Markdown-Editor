import React from 'react'

interface Props {
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UploadBtn: React.FC<Props> = ({ handleFileChange }) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const handleUploadClick = () => {
        inputRef.current?.click();
    };

    return (
        <>
            <input type="file" accept=".md" id="fileID" className="hidden" ref={inputRef} onChange={handleFileChange} />
            <button className="button" onClick={handleUploadClick}>
                <svg className="fill-white" width="18" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M10 9h-6l8-9 8 9h-6v11h-4v-11zm11 11v2h-18v-2h-2v4h22v-4h-2z" />
                </svg>
                <span className="heading-medium">Upload Document</span>
            </button>
        </>
    )
}

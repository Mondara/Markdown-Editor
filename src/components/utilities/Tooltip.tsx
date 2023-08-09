import React from 'react'

interface Props {
    children: React.ReactNode;
    description: string;
}

export const Tooltip: React.FC<Props> = ({ children, description }) => {
    return (
        <div className="group flex relative">
            {children}
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800  text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 p-1 min-w-max">{description}</span>
        </div>
    )
}

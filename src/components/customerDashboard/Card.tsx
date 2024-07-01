import React, { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) =>  {
    return (
        <div className="p-3 shadow-lg min-h-full">
            {children}
        </div>
    )
}

export default Card
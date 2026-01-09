import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
    children,
    className = '',
    hoverEffect = true
}) => {
    return (
        <div className={`
            bg-card text-card-foreground p-6 rounded-2xl border border-border shadow-sm
            ${hoverEffect ? 'hover:shadow-md transition-all duration-300 hover:border-primary/20' : ''} 
            ${className}
        `}>
            {children}
        </div>
    );
};

export default Card;

"use client";

import Link from 'next/link';
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    children,
    href,
    onClick,
    variant = 'primary',
    className = '',
    disabled = false,
    type
}) => {
    const baseStyles = "px-6 py-3 rounded-full font-bold transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 active:scale-95";
    const variants = {
        primary: "bg-primary text-primary-foreground hover:bg-opacity-90 shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)]",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
    };

    const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedStyles}>
                {children}
            </Link>
        );
    }

    return (
        <button 
            type={type} 
            onClick={onClick} 
            className={combinedStyles} 
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;

"use client";

"use client";

import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    containerClassName?: string;
}

const Section: React.FC<SectionProps> = ({
    children,
    className = '',
    id,
    containerClassName = ''
}) => {
    return (
        <section id={id} className={`py-12 md:py-24 ${className}`}>
            <div className={`container mx-auto px-4 md:px-6 ${containerClassName}`}>
                {children}
            </div>
        </section>
    );
};

export default Section;

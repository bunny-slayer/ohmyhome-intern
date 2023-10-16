import React, { ReactNode } from 'react';

type CardsProps = {
    children: ReactNode;
};

const Cards = ({ children }: CardsProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {children}
        </div>
    );
};

export default Cards;

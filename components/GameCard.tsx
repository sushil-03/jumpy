import React, { FC } from "react";
export type CardProp = {
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const GameCard: FC<CardProp> = ({ children, className }) => {
    return (
        <div className={`w-full h-full border-4 border-black  ${className}`}>
            {children}
        </div>
    );
};

export default GameCard;

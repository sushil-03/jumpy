import React, { FC } from "react";

type TextProps = {
    text: string;
};
const Text: FC<TextProps> = ({ text }) => {
    return (
        <p className="w-full text-4xl font-bold text-center uppercase font-soulmate">
            {text}
        </p>
    );
};

export default Text;

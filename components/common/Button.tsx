import React, { FC, ReactNode } from "react";
import Image from "next/image";
type DefaultButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

type ButtonProps = {
    children: ReactNode;
    fullWidth?: boolean;
    variant?: "primary" | "secondary" | "tertiary";
} & DefaultButtonProps;

const Button: FC<ButtonProps> = ({
    fullWidth = false,
    children,
    className,
    variant = "primary",
    ...buttonProps
}) => {
    const fullWidthStyle = fullWidth ? "w-full" : "";
    const getVariant = () => {
        switch (variant) {
            case "primary": {
                return "bg-[#7CE0FF]  hover:bg-brand-300 active:bg-brand-200 border-brand-200 hover:border-brand-300 active:border-brand-200 text-black";
            }
            case "secondary": {
                return " bg-transparent text-black hover:bg-grey-100 active:bg-transparent border border-brand-200";
            }
            case "tertiary": {
                return "text-black bg-grey-300 hover:bg-grey-400 active:bg-grey-500";
            }
            default: {
                return " bg-brand-600 hover:bg-brand-500 active:bg-brand-600 ";
            }
        }
    };

    return (
        // <button
        //     {...buttonProps}
        //     className={`font-raleway font-bold py-2 md:py-4 px-10 select-none focus:outline-none text-sm  rounded-lg ${fullWidthStyle} border  disabled:bg-zinc-300 ${getVariant()} ${className}`}
        // >
        //     {children}
        // </button>
        <div className="flex flex-row w-full">
            <div className="flex items-center justify-center p-2 mx-1 text-xs text-gray-400 bg-[#7CE0FF]  rounded-l-sm md:text-md px-4">
                <Image
                    src={"/images/arrow.png"}
                    alt="Sphere"
                    width="15"
                    height="15"
                />{" "}
            </div>
            <button
                {...buttonProps}
                className={`font-raleway font-semibold py-2 md:py-4 px-10 select-none focus:outline-none   rounded-r-sm ${fullWidthStyle} border  disabled:bg-zinc-300 ${getVariant()} ${className}`}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;

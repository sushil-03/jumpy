import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

type TextProps = {
    text: string;
    isElon?: Boolean;
};
const Text: FC<TextProps> = ({ text, isElon = false }) => {
    return (
        <div className="flex items-center justify-center">
            <p className="w-full text-4xl font-bold text-center uppercase font-soulmate">
                {text}
            </p>
            {isElon && (
                <div className="cursor-pointer">
                    <Link href="/">
                        <Image
                            src={"/images/twitter.png"}
                            alt="Sphere"
                            width="70"
                            height="70"
                        />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Text;

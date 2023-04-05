import Image from "next/image";
import React, { FC, ReactNode } from "react";
import Link from "next/link";
import Button from "./Button";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
type ContainerProps = {
    children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
    const router = useRouter();
    return (
        <div className="relative flex flex-col items-center w-screen h-screen font-poppins bg-gradient-to-r from-cyan-400 to-[#F7F7F7]">
            <div className="fixed w-screen h-screen bg-gradient-to-br from-[#43bee3] to-[#F7F7F7] " />
            <div className="fixed cursor-pointer right-10">
                <Image
                    src={"/images/twitter.png"}
                    alt="Sphere"
                    width="80"
                    height="80"
                    className="opacity-50"
                />
            </div>
            <div className="fixed -top-5 -right-5">
                <Image
                    src={"/images/twitter.png"}
                    alt="Sphere"
                    width="80"
                    height="80"
                    className="opacity-50"
                />
            </div>
            <div className="fixed cursor-pointer left-10 top-2">
                <div>
                    <Link href="/" className="cursor-poin">
                        <Image
                            src={"/images/twitter.png"}
                            alt="Sphere"
                            width="60"
                            height="60"
                            className="cursor-pointer"
                        />
                    </Link>
                </div>
            </div>
            <div className="fixed -bottom-5 right-10">
                <Image
                    src={"/images/twitter.png"}
                    alt="Sphere"
                    width="80"
                    height="80"
                    className="opacity-50"
                />
            </div>

            <div className="fixed -bottom-5 -right-5">
                <Image
                    src={"/images/twitter.png"}
                    alt="Sphere"
                    width="80"
                    height="80"
                    className="opacity-50"
                />
            </div>

            <div className="fixed bottom-10 -right-5">
                <Image
                    src={"/images/twitter.png"}
                    alt="Sphere"
                    width="80"
                    height="80"
                    className="opacity-50"
                />
            </div>
            <div className="flex flex-col items-center w-full min-h-screen ">
                <div className="relative w-full h-full ">{children}</div>
            </div>
        </div>
    );
};

export default Container;

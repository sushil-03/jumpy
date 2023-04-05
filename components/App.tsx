/* eslint-disable @next/next/no-img-element */
import Container from "./common/Container";
import Head from "next/head";
import Button from "./common/Button";
import { useRouter } from "next/router";
import Image from "next/image";
import GameCard from "./GameCard";
import Text from "./common/Text";
import { useState } from "react";
function App() {
    const router = useRouter();
    const [iswallet, setIsWallet] = useState<boolean>(false);
    const [isConfirm, setIsConfirm] = useState<boolean>(false);
    const [loading, setisLoading] = useState<boolean>(false);
    const handleName = () => {
        setisLoading(true);
        setTimeout(() => {
            setisLoading(false);
            setIsConfirm(true);
        }, 8000);
    };
    const handleConfirm = () => {
        setisLoading(true);
        setTimeout(() => {
            setisLoading(false);
            router.push("/home");
        }, 4000);
    };
    return (
        <Container>
            <Head>
                <title>Jumpy Elon</title>
            </Head>
            <div className="flex flex-col w-1/4 gap-4 m-auto h-3/4 mt-14">
                <GameCard className=" bg-[#7CE0FF]">
                    <div className="flex flex-col items-center m-auto mt-10 justify-evenly h-3/4 ">
                        <Text text="JUMPY ELON" />
                        <div className="p-8 duration-500 left-10 top-2 animate-bounce">
                            <Image
                                src={"/images/twitter.png"}
                                alt="Sphere"
                                width="180"
                                height="180"
                            />
                        </div>
                    </div>
                </GameCard>
                <Button
                    fullWidth
                    variant="secondary"
                    onClick={() => setIsWallet(true)}
                >
                    Connect Solace Wallet
                </Button>
            </div>
            {iswallet && !isConfirm && (
                <div className="absolute inset-0 z-30 flex items-center justify-center w-full h-full text-white backdrop-blur-sm ">
                    <div className="w-2/5 bg-[#1F1F1F] rounded-xl h-1/2 pt-8 flex flex-col gap-12">
                        <div className="flex flex-col items-center justify-center w-full gap-6 pb-4 border-b h-1/4">
                            <div className="flex items-center gap-3 ">
                                <Image
                                    src={"/images/solace.png"}
                                    width={35}
                                    height={35}
                                    alt="solace"
                                />

                                <span className="text-2xl font-medium font-poppins">
                                    solace protocol
                                </span>
                            </div>
                            <span className="text-gray-400 font-spacemono">
                                connect your solace account to jumpy elon
                            </span>
                        </div>
                        <div className="flex flex-col items-center w-1/2 h-full gap-3 pb-4 mx-auto ">
                            <span className="text-xl font-medium ">
                                enter your username
                            </span>
                            <span className="mx-2 font-normal text-center text-gray-400 font-spacemono">
                                use your solace app in order to connect to jumpy
                                elon
                            </span>
                            <input
                                type="text"
                                className="w-full px-2 py-3 mt-3 rounded-md bg-inherit font-spacemono placeholder:font-spacemono"
                                placeholder="solace username"
                            />
                            {loading ? (
                                <button
                                    type="button"
                                    disabled
                                    className="inline-flex items-center justify-center w-full gap-2 p-3 mt-3 text-black bg-white rounded-md font-spacemono"
                                >
                                    <svg
                                        className="w-4 h-4 animate-spin"
                                        viewBox="3 3 18 18"
                                    >
                                        <path
                                            className="fill-blue-800"
                                            d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                                        ></path>
                                        <path
                                            className="fill-blue-100"
                                            d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
                                        ></path>
                                    </svg>
                                    <span className="font-semibold tracking-wide font-spacemono">
                                        Loading...
                                    </span>
                                </button>
                            ) : (
                                <button
                                    className="w-full p-3 mt-3 space-x-2 font-semibold tracking-wide text-black bg-white rounded-md font-spacemono "
                                    onClick={handleName}
                                >
                                    confirm
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {isConfirm && (
                <div className="absolute inset-0 z-30 flex items-center justify-center w-full h-full text-white backdrop-blur-sm">
                    <div className="w-2/5 bg-[#1F1F1F] rounded-xl h-1/2 pt-8 flex flex-col gap-12">
                        <div className="flex flex-col items-center justify-center w-full gap-6 pb-4 border-b h-1/4">
                            <div className="flex items-center gap-3 ">
                                <Image
                                    src={"/images/solace.png"}
                                    width={35}
                                    height={35}
                                    alt="solace"
                                />

                                <span className="text-2xl font-medium font-poppins">
                                    solace protocol
                                </span>
                            </div>
                            <span className="text-[#00FFA3] font-semibold tracking-wide font-spacemono">
                                account connected
                            </span>
                        </div>
                        <div className="flex flex-col items-center w-full h-full gap-3 pb-4 mx-auto mt-">
                            <div className="flex flex-col items-center w-1/2">
                                <p className="relative text-xl font-medium font-poppins">
                                    ankitrush{" "}
                                    <p className="w-2 h-2 bg-[#00FFA3] rounded-full absolute -right-2 -top-0"></p>
                                </p>
                                <span className="mx-1 font-semibold tracking-wide text-center text-gray-400 font-spacemono">
                                    jumpy elon needs these following permissions
                                </span>
                            </div>
                            <div className="w-2/3 mx-auto text-center">
                                <ul className="font-semibold tracking-wide text-gray-400 font-spacemono">
                                    <li>
                                        <p className="flex items-center justify-center gap-2 text-center ">
                                            <p className="w-[6px] h-[6px] bg-gray-400 rounded-full "></p>{" "}
                                            <p>
                                                spend not more than 100 elon
                                                tokens
                                            </p>
                                        </p>
                                    </li>

                                    <li>
                                        <p className="flex items-center justify-center gap-2 text-center">
                                            <p className="w-[6px] h-[6px] bg-gray-400 rounded-full "></p>{" "}
                                            <p className="">
                                                sign recordStat method for
                                                contract
                                            </p>
                                        </p>
                                        <p className="relative text-left left-14">
                                            ac34...zbxy
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            {loading ? (
                                <button
                                    type="button"
                                    disabled
                                    className="inline-flex items-center justify-center w-3/5 gap-2 p-3 mt-3 font-semibold tracking-wide text-black bg-white rounded-md font-spacemono"
                                >
                                    <svg
                                        className="w-4 h-4 animate-spin"
                                        viewBox="3 3 18 18"
                                    >
                                        <path
                                            className="fill-blue-800"
                                            d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                                        ></path>
                                        <path
                                            className="fill-blue-100"
                                            d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
                                        ></path>
                                    </svg>
                                    <span>Verifying...</span>
                                </button>
                            ) : (
                                <button
                                    className="w-3/5 p-3 mt-3 space-x-2 font-semibold tracking-wide text-black bg-white rounded-md font-spacemono "
                                    onClick={handleConfirm}
                                >
                                    confirm
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </Container>
    );
}

export default App;

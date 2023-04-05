/* eslint-disable @next/next/no-img-element */
import Container from "../../components/common/Container";
import Head from "next/head";
import Button from "../../components/common/Button";
import { useRouter } from "next/router";
import Image from "next/image";
import GameCard from "../../components/GameCard";
import Text from "../../components/common/Text";
import { useState } from "react";
function Index() {
    const router = useRouter();
    const [loading, setisLoading] = useState<Boolean>(false);

    return (
        <Container>
            <Head>
                <title>Jumpy Elon</title>
            </Head>
            <div className="flex flex-col w-1/4 gap-4 m-auto h-3/4 mt-14">
                <Text text="JUMPY ELON" />
                <GameCard className=" bg-[#7CE0FF]">
                    <div className="relative flex flex-col items-center h-full ">
                        <div className="p-4 pt-8">
                            <Image
                                src={"/images/planet.png"}
                                width={160}
                                height={120}
                                alt="planet"
                            />
                        </div>
                        <div className="relative flex flex-col items-center justify-center flex-1 w-full h-full px-4 mx-4 text-sm font-medium text-center font-poppins">
                            <span>How to play:</span>
                            <div className="flex flex-col gap-1 mt-2 text-center">
                                <p>
                                    1. Use Your Keyboard Or Mouse to Keep <br />{" "}
                                    Elon Afloat
                                </p>
                                <p className="">
                                    2. Dodge Obstacle By Tactfully <br />
                                    Controlling Mr Musk
                                </p>
                                <p className="mx-6">
                                    3. Survive For As Long As Possible
                                </p>
                            </div>
                        </div>
                        <div className="relative flex flex-col items-center justify-center flex-1 w-full h-full text-sm font-semibold text-center font-poppins">
                            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/3 "></div>
                            <div className="absolute right-0 -bottom-2 ">
                                <Image
                                    src={"/images/elon.png"}
                                    width={300}
                                    height={250}
                                    alt="elon"
                                />
                            </div>
                        </div>
                    </div>
                </GameCard>

                <Button
                    variant="primary"
                    fullWidth
                    onClick={() => {
                        setisLoading(true);
                        setTimeout(() => {
                            setisLoading(false);
                            router.push("/play");
                        }, 5000);
                    }}
                    className="inline-flex items-center justify-center gap-2"
                >
                    {loading && (
                        <div>
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
                        </div>
                    )}
                    {loading ? "Loading ..." : "Start Jumping"}
                </Button>
            </div>
        </Container>
    );
}

export default Index;

import GameCard from "../../components/GameCard";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import Text from "../../components/common/Text";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
const Index = () => {
    const vidRef = React.useRef<HTMLVideoElement>(null);
    const [showresult, isResult] = useState<boolean>(false);
    const [loading, isLoading] = useState<boolean>(false);

    const router = useRouter();

    const continuePlay = () => {
        isLoading(true);
        setTimeout(() => {
            isLoading(false);
            isResult(false);
            vidRef.current?.play();
        }, 4000);
    };
    useEffect(() => {
        vidRef.current?.play();
        setTimeout(() => {
            isResult(true);
            vidRef.current?.pause();
        }, 10000);
    }, []);
    return (
        <Container>
            <div className="relative flex flex-col w-1/4 gap-4 m-auto mt-14">
                <Text text="JUMPY ELON" />
                <GameCard
                    className="relative bg-black"
                    onClick={() => {
                        vidRef.current?.play();
                    }}
                >
                    <video
                        ref={vidRef}
                        className="overflow-hidden rounded-md outline-none "
                        muted
                    >
                        <source src="/videos/play2.mov" type="video/mp4" />
                    </video>

                    {showresult && (
                        <div className="bg-[#FF7373] h-4/5 w-5/6 absolute top-10 right-10 rounded-md overflow-hidden backdrop-brightness-0">
                            <div className="h-full">
                                <div className="flex flex-col items-center justify-center w-full h-full ">
                                    <Text text="GAME OVER" />
                                    <button
                                        className="w-4/5 p-3 mx-10 mt-6 text-black bg-white rounded-md font-spacemono hover:bg-white/80"
                                        onClick={continuePlay}
                                    >
                                        {loading
                                            ? "Loading ..."
                                            : "continue by spending 50 ELON tokens"}
                                    </button>
                                </div>
                                <div className="absolute rotate-30 -bottom-10 -left-10">
                                    <Image
                                        src={"/images/sadElon.png"}
                                        width={180}
                                        height={130}
                                        alt="planet"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </GameCard>
            </div>
        </Container>
    );
};

export default Index;

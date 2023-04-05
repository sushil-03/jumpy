import React from "react";
import GameCard from "../../components/GameCard";
import Image from "next/image";
import Button from "../../components/common/Button";
import Container from "../../components/common/Container";
import Text from "../../components/common/Text";
const index = () => {
    return (
        <Container>
            <div className="flex flex-col w-1/4 gap-4 m-auto h-3/4 mt-14">
                <Text />
                <GameCard className="bg-[#FF7373]">
                    <div className="relative flex flex-col items-center justify-around h-full gap-3">
                        <div className="flex h-1/2 ">
                            <p className="self-end w-full text-4xl font-bold text-center uppercase ">
                                JUMPY ELON
                            </p>
                        </div>
                        <div className="h-full ">
                            <Image
                                src={"/images/sadElon.png"}
                                width={300}
                                height={230}
                                alt="planet"
                            />
                        </div>
                    </div>
                </GameCard>

                <Button fullWidth variant="primary">
                    Continue Playing
                </Button>
            </div>
        </Container>
    );
};

export default index;

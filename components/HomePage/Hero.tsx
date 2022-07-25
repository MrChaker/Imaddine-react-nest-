import Image from "next/future/image";
import React from "react";
import { Button } from "../general/Button";
import { BsArrowDown } from "react-icons/bs";
const Hero = () => {
    return (
        <>
            <Image
                src="/images/Imad.png"
                className="absolute left-0 top-0 contrast-125 brightness-50 sm:brightness-110 dark:contrast-100 sm:dark:brightness-100 w-[110%] sm:w-1/2 min-w-[324px] bg-dark-2 sm:bg-transparent "
                width={1000}
                height={1000}
            />
            <div className="m-auto sm:mr-0 sm:text-right w-full sm:w-2/3 min-h-screen pt-8 mb:pt-20 md:pt-32 relative text-center text-light-1 sm:text-dark-1 sm:dark:text-light-1">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-5">
                    عماد الدين زناف
                </h1>
                <p className="text-md md:text-lg mb-5">
                    روائي و كاتب و صانع محتوى جزائري ، مهتم بالفلسفة و تبسيط
                    العلوم{" "}
                </p>
                <Button
                    text="المزيد"
                    txtColor="white"
                    color="var(--red)"
                    hoveredBg="white"
                    hoveredTxt="black"
                    leftIcon={<BsArrowDown />}
                    style={"m-auto sm:mr-0"}
                />
            </div>
        </>
    );
};

export default Hero;

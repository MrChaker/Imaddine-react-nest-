import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "../general/Button";
import { BsArrowDown } from "react-icons/bs";
const Hero = () => {
    const imgRef = useRef<HTMLDivElement>(null!);
    const txt = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        window.addEventListener("resize", () => {
            txt.current.setAttribute(
                "style",
                ` height: ${imgRef.current.clientHeight}px `
            );
        });
    });
    return (
        <>
            <div
                ref={imgRef}
                className="absolute left-0 top-0 sm:dark:brightness-100 w-[110%] sm:w-5/12 min-w-[364px] h-[125vw] sm:h-[50vw] max-h-screen bg-dark-2 sm:bg-transparent ">
                <Image
                    id="img"
                    src="/images/Imad.png"
                    className="contrast-125 brightness-50 sm:brightness-110 dark:contrast-100 sm:dark:brightness-100"
                    alt="imade picture"
                    layout="fill"
                    objectFit="contain"
                    objectPosition={"0px top"}
                />
            </div>
            <div
                ref={txt}
                className="m-auto sm:mr-0 sm:text-right w-full sm:w-2/3 pt-8 mb:pt-20 md:pt-36 relative text-center text-light-1 sm:text-dark-1 sm:dark:text-light-1"
                style={{ height: imgRef.current?.clientHeight || 500 }}>
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
                    onClick={() => {
                        window.scrollTo({
                            behavior: "smooth",
                            top: imgRef.current.clientHeight - 30,
                        });
                    }}
                />
            </div>
        </>
    );
};

export default Hero;

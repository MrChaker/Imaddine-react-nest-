import Image from "next/future/image";
import React from "react";

const Hero = () => {
    return (
        <>
            <div className="ml-auto mt-auto text-right w-1/2 min-h-screen pt-32">
                <h1 className="text-6xl font-extrabold mb-5">
                    عماد الدين زناف
                </h1>
                <p className="text-lg">
                    روائي و كاتب و صانع محتوى جزائري ، مهتم بالفلسفة و تبسيط
                    العلوم{" "}
                </p>
            </div>
            <Image
                src="/images/Imad.png"
                className="absolute left-0 top-0"
                width={600}
                height={1000}
            />
        </>
    );
};

export default Hero;

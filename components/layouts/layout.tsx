import { NextPage } from "next";
import Image from "next/future/image";
import React from "react";
import NavBar from "../general/NavBar";
import NavEl from "../general/NavEl";
import { ThemeChanger } from "../general/ThemeChanger";
import { BsMoonStars, BsSun } from "react-icons/bs";
export const Layout: NextPage<{ children: React.ReactNode }> = ({
    children,
}) => {
    let sharedStyle =
        "p-4 px-6 sm:px-20 lg:px-40 font-main dark:bg-dark-1 dark:text-white bg-white text-dark-1 text-xl";
    let active = "text-red-1";

    return (
        <>
            <NavBar
                extra={<ThemeChanger moon={<BsMoonStars />} sun={<BsSun />} />}
                logo={<Image src="/images/logo.svg" width={48} height={48} />}
                style={`flex-row-reverse ${sharedStyle} `}>
                <NavEl text="الرئيسة" link="/" style="" activeStyle={active} />
                <NavEl
                    text="السيرة"
                    style=""
                    link="/bio"
                    activeStyle={active}
                />
                <NavEl
                    text="المقالات"
                    style=""
                    link="/articals"
                    activeStyle={active}
                />
            </NavBar>
            <div className={`pt-24 min-h-screen ${sharedStyle} `}>
                {children}
            </div>
        </>
    );
};
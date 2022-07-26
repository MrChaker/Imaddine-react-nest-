import React, { ReactNode, useEffect, useState } from "react";
import { BsX } from "react-icons/bs";

const Menu = ({
    menu,
    setMenu,
    children,
}: {
    menu: boolean;
    setMenu: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactNode;
}) => {
    const [r, setR] = useState(false);
    console.log("remounted");
    const remount = () => {
        console.log(menu);
        setR(!r);
    };
    return (
        <menu
            role="menu"
            className={`flex sm:hidden items-start justify-between min-h-screen z-50 p-4 fixed left-0 top-0 w-2/3 mb:w-1/2 sm:w-1/4  ${
                !menu ? "-translate-x-full" : "translate-x-0"
            }  transition-transform bg-black text-white `}>
            <div>{children}</div>
            <BsX
                role="exitBtn"
                className="block text-red-1 cursor-pointer text-2xl"
                onClick={() => {
                    setMenu(false), remount();
                }}
            />
        </menu>
    );
};

export default Menu;

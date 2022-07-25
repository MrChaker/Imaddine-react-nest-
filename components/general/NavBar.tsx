import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import Menu from "./Menu";

type PropsType = {
    children: React.ReactNode;
    logo?: ReactElement;
    extra?: ReactElement;
    style?: string;
};
const NavBar = (props: PropsType) => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            }
        });
    });
    const [menu, setMenu] = useState(false);
    return (
        <nav
            className={`z-50 px-4 flex justify-between items-center fixed left-0 top-0 w-full ${
                props.style
            } transition-all ${scrolled && "shadow-dark dark:shadow-light"}`}
            style={{ background: !scrolled ? "transparent" : "" }}>
            <Link href="/">
                <a> {props.logo}</a>
            </Link>
            <ul className=" justify-center flex-row-reverse gap-6 hidden md:flex">
                {props.children}
            </ul>
            <div className=" flex justify-center flex-row gap-2">
                <HiMenuAlt1
                    className="block md:hidden cursor-pointer"
                    onClick={() => setMenu(true)}
                />
                {props.extra}
            </div>

            <Menu menu={menu} setMenu={setMenu}>
                {props.children}
            </Menu>
        </nav>
    );
};

export default NavBar;

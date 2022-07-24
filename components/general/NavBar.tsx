import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";

type PropsType = {
    children: React.ReactNode;
    logo: ReactElement;
    extra: ReactElement;
    style: string;
};
const NavBar = (props: PropsType) => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log(document.body.scrollTop);
            if (document.body.scrollTop > 0) {
                setScrolled(true);
            }
        });
    });
    return (
        <div
            className={`z-50 flex justify-between items-center fixed left-0 top-0 w-full ${props.style} `}
            style={{ background: !scrolled ? "transparent" : "" }}>
            <Link href="/">
                <a> {props.logo}</a>
            </Link>
            <ul className="flex justify-center flex-row-reverse gap-6">
                {props.children}
            </ul>
            <div>{props.extra}</div>
        </div>
    );
};

export default NavBar;

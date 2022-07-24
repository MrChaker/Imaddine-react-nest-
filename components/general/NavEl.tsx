import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
type PropsType = {
    text: string;
    link?: string;
    onClick?: () => void;
    isActive?: boolean;
    activeStyle?: string;
    style: string;
};
const NavEl = (props: PropsType) => {
    const router = useRouter();
    return (
        <li>
            <Link href={`${props.link || "#"}`}>
                <a
                    className={`${props.style} ${
                        router.pathname === props.link ? props.activeStyle : ""
                    }`}>
                    {props.text}
                </a>
            </Link>
        </li>
    );
};

export default NavEl;

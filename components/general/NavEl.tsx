import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
type PropsType = {
    text: string;
    link?: string;
    onClick?: () => void;
    isActive?: boolean;
    activeStyle?: string;
    style: string;
};
const NavEl = (props: PropsType) => {
    const { pathname, push } = useRouter();
    return (
        <li className="cursor-pointer">
            <div
                onClick={async () => {
                    await push(props.link || "#");
                }}
                className={`${props.style} ${
                    pathname === props.link ? props.activeStyle : ""
                } `}
                data-testid={props.text}>
                {props.text}
            </div>
        </li>
    );
};

export default NavEl;

import { ReactElement, useState } from "react";

type PropsType = {
    block?: boolean;
    rounded?: boolean;
    outline?: boolean;
    color: string;
    hoveredBg?: string;
    txtColor?: string;
    hoveredTxt?: string;
    right?: boolean;
    size?: string;
    leftIcon?: ReactElement;
    rightIcon?: ReactElement;
    text?: string;
    type?: "button" | "submit" | "reset" | undefined;
    dir?: "rtl" | "ltr" | undefined;
    style?: string;
    onClick?: (prams: any | undefined) => any | void | undefined;
};
export const Button = (props: PropsType) => {
    const [hovered, setHovered] = useState(false);
    return (
        <button
            id="btn"
            dir={props.dir || "ltr"}
            type={props.type}
            onClick={props.onClick}
            onMouseEnter={() => {
                setHovered(true);
            }}
            onMouseLeave={() => {
                setHovered(false);
            }}
            className={` cursor-pointer p-4 px-8  ${
                props.rounded ? "rounded-full" : ""
            } justify-center transition-all border border-solid  flex items-center ${
                props.block ? "w-full" : ""
            } ${props.right ? "ml-auto" : ""} ${props.style}`}
            style={{
                color:
                    hovered && props.hoveredTxt
                        ? props.hoveredTxt
                        : props.outline
                        ? props.color
                        : props.txtColor,
                backgroundColor:
                    hovered && props.hoveredBg
                        ? props.hoveredBg
                        : props.outline
                        ? "transparent"
                        : props.color,
                fontSize: props.size || "1.25rem",
                borderColor: props.color,
            }}>
            <p className={`mr-4 inline-block`}>{props.leftIcon}</p>
            <p> {props.text} </p>
            <p className={`ml-4 inline-block`}>{props.rightIcon}</p>
        </button>
    );
};

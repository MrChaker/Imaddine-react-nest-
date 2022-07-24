import { ReactElement, useEffect } from "react";
import { useThemeContext } from "../../context/themeContext";

export const ThemeChanger = (props: {
    moon: ReactElement;
    sun: ReactElement;
}) => {
    const { darkTheme, setDarkTheme } = useThemeContext();
    useEffect(() => {
        if (
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches) ||
            localStorage.theme === "dark"
        ) {
            localStorage.setItem("theme", "dark");
            setDarkTheme(true);
        } else if (!("theme" in localStorage)) {
            localStorage.setItem("theme", "light");
        }
    }, []);
    useEffect(() => {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkTheme]);

    const setOnStorage = (b: boolean) => {
        localStorage.setItem("theme", b ? "dark" : "light");
        setDarkTheme(b);
    };
    return (
        <div
            style={{ cursor: "pointer" }}
            onClick={() => {
                setOnStorage(!darkTheme);
            }}>
            {darkTheme ? props.moon : props.sun}
        </div>
    );
};

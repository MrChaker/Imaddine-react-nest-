import { useState, useEffect } from "react";

export const useMediaQuery = (px: number) => {
    const [width, setWidth] = useState<boolean>(false);
    useEffect(() => {
        if (window.innerWidth < px) setWidth(true);
        else setWidth(false);
        let b = width;
        window.addEventListener("resize", () => {
            if (window.innerWidth < px && !b) {
                setWidth(true);
                b = true;
            } else if (window.innerWidth > px && b) {
                setWidth(false);
                b = false;
            }
        });
    }, []);

    return width;
};

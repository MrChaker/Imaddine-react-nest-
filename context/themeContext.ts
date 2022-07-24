import { createContext, useContext } from "react";

//theme
export type Theme = {
    darkTheme: boolean;
    setDarkTheme: (b: boolean) => void;
};
export const ThemeContext = createContext<Theme>({
    darkTheme: false,
    setDarkTheme: () => false,
});

export const useThemeContext = () => useContext(ThemeContext);

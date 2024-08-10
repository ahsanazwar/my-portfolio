import { createContext, Dispatch, SetStateAction} from "react";

// export type ThemeType = "light" | "dark";
export type ThemeType = string;

export interface ThemeContextInterface {
    theme: ThemeType,
    setTheme: Dispatch<SetStateAction<ThemeType>>
};

export const defaultState = {
    theme: "dark",
    setTheme: () => {}
} as ThemeContextInterface

const ThemeContext = createContext(defaultState);
 
export default ThemeContext;

import { createContext, Dispatch, SetStateAction} from "react";

// export type ThemeType = "light" | "dark";
export type ThemeType = boolean;

export interface ThemeContextInterface {
    theme: ThemeType,
    setTheme: Dispatch<SetStateAction<ThemeType>>
};

export const defaultState = {
    theme: true,
    setTheme: () => {}
} as ThemeContextInterface

const ThemeContext = createContext(defaultState);
 
export default ThemeContext;

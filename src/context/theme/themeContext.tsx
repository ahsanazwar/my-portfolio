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


// type Props = {
//     children : ReactNode,
// }


// export default function ThemeState({children}:Props)
// {
    
//     const [theme, setTheme] = useState<ThemeType>("dark");

//     return ( 
//         <ThemeContext.Provider value={{ theme , setTheme }}>
//             {children}
//         </ThemeContext.Provider>
//      );
// }
 
// export default themeState;
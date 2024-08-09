import { useState } from "react";
import ThemeContext,{ThemeType} from "./themeContext";


type Props = {
    children : React.ReactNode,
}


const themeState = ({children}:Props) => {
    
    const [theme, setTheme] = useState<ThemeType>("dark");

    return ( 
        <ThemeContext.Provider value={{ theme , setTheme }}>
            {children}
        </ThemeContext.Provider>
     );
}
 
export default themeState;
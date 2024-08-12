import { useState } from "react";
import ThemeContext,{ThemeType} from '@context/theme/themeContext';


type Props = {
    children : React.ReactNode,
}


const themeState = ({children}:Props) => {
    
    const [theme, setTheme] = useState<ThemeType>(true);

    return ( 
        <ThemeContext.Provider value={{ theme , setTheme }}>
            {children}
        </ThemeContext.Provider>
     );
}
 
export default themeState;
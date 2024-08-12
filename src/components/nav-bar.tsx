import ThemeContext from '@context/theme/themeContext';
import {useContext} from 'react';

import { IoMoonSharp } from "react-icons/io5";
import { MdSunny } from "react-icons/md";


const Navbar = () => {
    const {theme,setTheme} = useContext(ThemeContext);
    const handleTheme = () =>{
        setTheme(!theme);
      }
    return ( 
        <div className="flex items-center w-full flex-col fixed left-0 top-0 py-5">
            <div className="container flex justify-end ">
                <button className="justify-self-end" onClick = {handleTheme}>{theme?<IoMoonSharp size="30" color='#FF29A6'/>:<MdSunny size="30" color='#007cd7'/>}</button>
            </div>
        </div>  
    );
}
 
export default Navbar;
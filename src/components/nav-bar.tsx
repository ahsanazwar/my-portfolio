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
        <>

            <div className={"bg-indigo-200 dark:bg-[#0e0d12] flex items-center w-full flex-col fixed left-0 top-0 py-4 px-5 sm:px-0 z-20 border-b-2 border-gray-500"}>
                <div className="container flex justify-between items-center">
                    <a href="" className="font-bold text-[1.5rem] sm:text-[1.5rem] text-[#0e0d12] dark:text-white">Ahsan<span className="text-blue dark:text-purple">.</span></a>
                    {/* <a className="justify-self-end cursor-pointer hover:cursor-pointer text-blue dark:text-white">Ahsan.</a> */}
                    <a className="justify-self-end cursor-pointer hover:cursor-pointer" onClick = {handleTheme}>{theme?<IoMoonSharp size="30" color='#FF29A6'/>:<MdSunny size="30" color='#007cd7'/>}</a>
                </div>
            </div>
        </>
    );
}
 
export default Navbar;
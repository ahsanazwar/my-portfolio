import { useEffect, useRef } from "react";

const WebLoader = () => {

    const loader = useRef<any>();

    useEffect(()=>{
        
        setTimeout(() => {
            loader.current.style.transform = "scaleX(0)";
        }, 2000)

    })
    return ( 
        <>
            <div ref={loader} className="customLoader flex h-screen fixed w-full top-0 left-0 z-50 bg-white items-center justify-center">
                <img src="infinite-spinner.svg"  width="70px" height="70px"/> <p className="text-blue dark:text-purple text-[35px]">&nbsp;&nbsp; Loading...</p>
            </div>
        </>
     );
}
 
export default WebLoader;
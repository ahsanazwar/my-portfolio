interface Props {
    children : React.ReactNode,
    heading : string
}
 
const SectionContainer = ({children,heading}: Props) => {
    return ( 
        <div className="py-3">
            <div className="flex items-center py-[100px] w-full flex-col">
                <div className="container pt-[120px] border-t-[2px] border-[#4b4b4b]">
                    <h1 className="text-purple text-[45px] text-center mb-24">{heading}</h1>    
                    {
                        children
                    }
                </div>
            </div>  
        </div> 
     );
}
 
export default SectionContainer;
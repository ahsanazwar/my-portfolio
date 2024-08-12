interface Props {
    children?: React.ReactNode,
    heading?: string
}
 
const SectionContainer = ({children,heading}: Props) => {
    return ( 
        <div className="sm:py-3">
            <div className="flex items-center py-[3.125rem] sm:py-[6.25rem] w-full flex-col">
                <div className="container pt-[3.5rem] sm:pt-[7.5rem] border-t-[2px] border-[#4b4b4b]">
                    <h1 className="text-blue dark:text-purple text-[45px] text-center mb-10 sm:mb-24 leading-tight">{heading}</h1>    
                    {
                        children
                    }
                </div>
            </div>  
        </div> 
     );
}
 
export default SectionContainer;
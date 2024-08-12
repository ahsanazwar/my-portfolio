interface Props {
    title: string,
    designation: string
}
 
const IntroSection = ({title,designation}:Props) => {
    return ( 
        <>
            <div>
                <h1 className="text-center font-bold leading-[1.5em]">
                    Hi, I am
                    <br/>
                    {title}
                    <br/>
                    <span className="text-blue dark:text-purple text-[2.18rem] sm:text-[2.8rem]">{designation}</span>
                </h1>
            </div>
        </>
     );
}
 
export default IntroSection;
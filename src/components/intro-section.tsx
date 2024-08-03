interface Props {
    title: string,
    designation: string
}
 
const IntroSection = ({title,designation}:Props) => {
    return ( 
        <>
            <div>
                <h1 className="text-center font-bold text-white leading-[1.5em]">
                    Hi, I am
                    <br/>
                    {title}
                    <br/>
                    <span className="text-purple text-[45px]">{designation}</span>
                </h1>
            </div>
        </>
     );
}
 
export default IntroSection;
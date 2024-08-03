interface Props {
    duration: string,
    degree: string
    title: string
    uni: string
}
 
const EducationList = ({duration,degree,title,uni}:Props) => {
    return ( 
        <>
            <li className="my-10 relative">
                <h3 className="text-[18px] text-[#817e7e]">{duration}</h3>
                <p className="text-[25px] mb-2">{degree} <br/> {title}</p>
                <h4 className="text-[18px] text-[#817e7e]">{uni}</h4>
            </li>
        </>
     );
}
 
export default EducationList;
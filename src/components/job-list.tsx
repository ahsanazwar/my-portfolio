interface Props {
    duration?: string,
    title?: string
    company?: string,
    url?: string
}
 
const JobList = ({duration,title,company,url}:Props) => {
    return ( 
        <>
            <li className="my-10 relative">
                <h3 className="text-[18px] text-[#817e7e]">{duration}</h3>
                <p className="text-xl sm:text-[1.56rem] mb-2">{company} <br/> {title}</p>
                <a href={`https://${url}`} className="text-[18px] text-blue-400 hover:text-purple">{url}</a>
            </li>
        </>
     );
}
 
export default JobList;
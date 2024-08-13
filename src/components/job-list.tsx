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
                <h3 className="text-[18px] text-[#817e7e] dark:text-[#817e7e]">{duration}</h3>
                <p className="text-xl sm:text-[1.56rem] mb-2">{title}</p>
                <h3 className="text-[18px] text-[#817e7e] dark:text-[#817e7e]">{company}</h3>
                <a href={`https://${url}`} className="text-[18px] text-blue hover:text-purple">{url}</a>
            </li>
        </>
     );
}
 
export default JobList;
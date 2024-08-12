interface Props {
    title: string,
    fbLink: string,
    githhubLink: string,
    linkedinLink: string,
}
 
const Social = ({title,fbLink,githhubLink,linkedinLink}:Props) => {
    return ( 
        <div className="py-3">
                                    
            <h2 className="text-blue dark:text-purple mb-2">{title}</h2>
            <ul className="flex items-center justify-center sm:justify-end gap-5">
                <li>
                    <a href={`${fbLink}`}>
                        <img className="w-[60px] h-[60px]" src="fb.svg"/>
                    </a>
                </li>
                <li>
                    <a href={`${githhubLink}`}>
                        <img className="w-[50px] h-[50px] bg-white rounded-full" src="github.svg"/>
                    </a>
                </li>
                <li>
                    <a href={`${linkedinLink}`}>
                        <img className="w-[60px] h-[60px]" src="linkedin.svg"/>
                    </a>
                </li>
            </ul>
        </div>
     );
}

 
export default Social;
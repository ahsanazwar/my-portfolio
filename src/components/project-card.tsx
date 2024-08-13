interface Props {
    title: string,
    image: string
    description: string
    url: string
}
 
const ProjectCard = ({title,image,description,url}:Props) => {
    return ( 
        <>
            <div className="w-full sm:w-[30%] mb-12 last:mb-0">
                <a href={url} target="_blank" className="bg-[#ccc] dark:bg-[#353333] p-card sm:bg-transparent dark:sm:bg-transparent block hover:bg-[#ccc]  dark:hover:bg-[#353333] cursor-pointer">
                    <div>
                        <img src={image}/>
                    </div>
                    <div className="p-4">
                        <h3 className="text-blue dark:text-purple py-4">{title}</h3>
                        <p>{description}</p>
                    </div>
                </a>
            </div>
        </>
     );
}
 
export default ProjectCard;
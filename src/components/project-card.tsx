interface Props {
    title: string,
    image: string
    description: string
    url: string
}
 
const ProjectCard = ({title,image,description,url}:Props) => {
    return ( 
        <>
            <div className="w-[30%] mb-12">
                <a href={url} target="_blank" className="block hover:bg-[#353333]">
                    <div>
                        <img src={image}/>
                    </div>
                    <div className="p-4">
                        <h3 className="text-purple my-4">{title}</h3>
                        <p>{description}</p>
                    </div>
                </a>
            </div>
        </>
     );
}
 
export default ProjectCard;
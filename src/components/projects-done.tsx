interface Props {
    title: string,
    projects: string
}
 
const ProjectsDone = ({title,projects}:Props) => {
    return ( 
        <div className="py-3">
            <h2 className="text-purple mb-2">{title}</h2>
            <div className="leading-7">
                <p className="text-white text-6xl font-bold">{projects}</p>
            </div>    
        </div>
     );
}

 
export default ProjectsDone;
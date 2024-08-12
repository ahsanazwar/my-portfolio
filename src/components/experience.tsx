interface Props {
    title: string,
    experience: string
}
 
const Experience = ({title,experience}:Props) => {
    return ( 
        <div className="py-3">
            <h2 className="text-blue dark:text-purple mb-2">{title}</h2>
            <div className="leading-7">
                <p className="text-black text-6xl font-bold">{experience}</p>
            </div>    
        </div> 
     );
}

 
export default Experience;
interface Props {
    title: string,
    content: string
}
 
const Bio = ({title,content}:Props) => {
    return ( 
        <div className="py-8 sm:py-3">
            <h2 className="text-blue dark:text-purple mb-2">{title}</h2>
            <p className="text-black  text-lg">
                {content}
            </p>
        </div>
     );
}

 
export default Bio;
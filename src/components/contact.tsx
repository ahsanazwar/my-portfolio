interface Props {
    title: string,
    country: string,
    email: string,
    phone: string
}
 
const Contact = ({title,country,email,phone}:Props) => {
    return ( 
        <div className="py-3">
            <h2 className="text-purple mb-2">{title}</h2>
            <div className="leading-7">
                <p className="text-white text-lg">{country}</p>
                <p className="text-white text-lg"><a href={`mailto:${email}`}>{email}</a></p>
                <p className="text-white text-lg"><a href={`tel:${phone}`}>{phone}</a></p>
            </div>    
        </div> 
     );
}

 
export default Contact;
// interface Props {
//     title: string,
//     country: string,
//     email: string,
//     phone: string
// }

import EducationList from "./education-list";

 
const Career = () => {
    return ( 
        <div className="py-3">
            <div className="flex items-center py-[100px] w-full flex-col">
                <div className="container pt-[120px] border-t-[2px] border-[#4b4b4b]">
                    <h1 className="text-purple text-[45px] text-center mb-24">Experience</h1>    
                    <div className="flex flex-col items-center">
                        <ul className="customList w-[18%] relative">

                            <EducationList
                                duration="2021-2023"
                                degree="Master Degree in "
                                title="Computer Science"
                                uni={"Iqra University, Karachi Pakistan"}
                            />

                            <EducationList
                                duration="2014-2018"
                                degree="Bachelor Degree in "
                                title="Computer Science"
                                uni={"Iqra University, Karachi Pakistan"}
                            />
                        </ul>

                        <ul className="customList w-[18%] relative">
                            <EducationList
                                duration="2023"
                                degree="React & Redux"
                                title="Certificate"
                                uni={"Iqra University, Karachi Pakistan"}
                            />
                        </ul>
                    </div>
                </div>
            </div>  
        </div> 
     );
}

 
export default Career;
import SectionContainer from "../layouts/section-container";
import EducationList from "./education-list";

 
const Education = () => {
    return ( 
        <SectionContainer heading="Education & Certificates">
            <div className="flex flex-col items-center">
                <ul className="customList text-center sm:text-left w-4/5 sm:w-[18%] relative">

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

                <ul className="customList text-center sm:text-left w-4/5 sm:w-[18%] relative">
                    <EducationList
                        duration="2023"
                        degree="React & Redux"
                        title="Certificate"
                        uni={"Udemy"}
                    />
                </ul>
            </div>
        </SectionContainer>
     );
}

 
export default Education;
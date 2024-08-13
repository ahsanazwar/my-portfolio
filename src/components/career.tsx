import SectionContainer from "@layouts/section-container";
import JobList from "@components/job-list";

const Career = () => {
    return ( 
        <SectionContainer heading="Experience">
            <div className="flex flex-col items-center">
                <ul className="customList text-center sm:text-left w-4/5 sm:w-[18%] relative">
                    <JobList
                        duration="2023-Present"
                        title="Frontend Developer"
                        company={"EY Global"}
                        url="www.ey.com/en_gl"
                    />
                    <JobList
                        duration="2020-2023"
                        title="Frontend Developer"
                        company={"The Collective"}
                    />

                    <JobList
                        duration="2019-2020"
                        title="Frontend Developer"
                        company={"Finesols"}
                        url="www.finesols.com"
                    />
                    <JobList
                        duration="2018-2019"
                        title="Frontend Developer"
                        company={"I-Docz"}
                    />
                </ul>
            </div>
        </SectionContainer>
     );
}

 
export default Career;
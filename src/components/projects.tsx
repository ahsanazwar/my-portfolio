import SectionContainer from "../layouts/section-container";
import ProjectCard from "./project-card";

const Projects = () => {
    return ( 
        <>
        <SectionContainer heading="Projects">
            <div className="flex justify-between flex-wrap gap-5">
                
                <ProjectCard
                    title={"Gulf Air"}
                    image="gulf-air.png"
                    description="This is a official website of Gulf Air. I am the part of the team who worked on this project"
                    url="https://www.gulfair.com/"
                />
                
                <ProjectCard
                    title={"Nida Ul Quran"}
                    image="nida-ul-quran.png"
                    description="This is a project of online quran learning. I created this project from scratch with react."
                    url="https://nidaulquran.com/home"
                />

                <ProjectCard
                    title={"Honda Middle East"}
                    image="honda.png"
                    description="This is a official website of Honda Middle East. I did worked on this website"
                    url="https://honda-mideast.com/en/"
                />
                
                <ProjectCard
                    title={"Sharjah 24"}
                    image="sharjah24.png"
                    description="This is a official website of Sharjah24. I did worked on this website"
                    url="https://www.sharjah24.ae/"
                />

                <ProjectCard
                    title={"Umm Al Emmarat"}
                    image="umm-al-emmarat.png"
                    description="This is a Umm Al Emmarat website. I did worked on this website"
                    url="https://www.ummalemaratpark.ae/en/Home"
                />

                <ProjectCard
                    title={"Gretique Matin"}
                    image="gretique-matin.png"
                    description="This is a Umm Al Emmarat website. I did worked on this website"
                    url="http://gretiquemartin.com"
                />
                
            </div>
        </SectionContainer>    
        </>
     );
}
 
export default Projects;
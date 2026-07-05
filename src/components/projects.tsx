import SectionContainer from "@layouts/section-container";
import ProjectCard from "@components/project-card";

const Projects = () => {
    return ( 
        <>
        <SectionContainer heading="Projects">
            <div className="flex justify-between flex-wrap gap-5">
                
                {/* <ProjectCard
                    title={"Gulf Air"}
                    image="gulf-air.png"
                    description="This is a official website of Gulf Air. I am the part of the team who worked on this project"
                    url="https://www.gulfair.com/"
                /> */}

                <ProjectCard
                    title={"e-Tools Support at Home"}
                    image="eSAH-bnr-screens-080525.jpg"
                    description="Part of the product team developing the e-Tools Support at Home web application as a Frontend Developer, building a modern, scalable, and responsive user interface using React and Next.js. The application is designed to streamline support processes by providing users with an efficient platform to manage and access home support services. I focused on creating reusable components, implementing responsive layouts, and delivering a seamless user experience across different devices. The project included building dynamic forms with robust client-side validation using React Hook Form and Zod, ensuring accurate data collection and an improved user experience. I also used Material UI to create a consistent, accessible, and modern interface while following best practices for performance and maintainability."
                    url="https://e-tools.com.au/product/e-tools-support-at-home-software/"
                />
                
                <ProjectCard
                    title={"Nida Ul Quran"}
                    image="nida-ul-quran.png"
                    description="This project is an online Quran learning platform that helps students connect with teachers for virtual Quran classes. My role was to modernize the frontend by rebuilding the user interface using React.js. I redesigned the UI with a focus on responsiveness, ensuring a seamless experience across desktop, tablet, and mobile devices. I also improved the overall layout, navigation, and user experience to create a cleaner, more modern, and user-friendly interface."
                    url="https://nidaulquran.com/home"
                />

                <ProjectCard
                    title={"Honda Middle East"}
                    image="honda.png"
                    description="Contributed to the development and ongoing maintenance of the official Honda Middle East website, which is built using HTML and the .NET platform. My responsibilities included implementing new modules, maintaining existing features, and ensuring the website remained functional, up to date, and aligned with business requirements."
                    url="https://honda-mideast.com/en/"
                />
                
                <ProjectCard
                    title={"Sharjah 24"}
                    image="sharjah24.png"
                    description="Developed the official Sharjah24 website from scratch as a Frontend Developer, transforming UI designs into a fully functional, responsive, and user-friendly website. I was responsible for building the frontend architecture, implementing reusable components, and ensuring a seamless user experience across desktop, tablet, and mobile devices."
                    url="https://www.sharjah24.ae/"
                />

                <ProjectCard
                    title={"Umm Al Emmarat"}
                    image="umm-al-emmarat.png"
                    description="Worked as a Frontend Developer on the Umm Al Emarat website, creating responsive, visually engaging, and user-friendly interfaces. I was responsible for implementing modern frontend designs, ensuring a seamless experience across desktop, tablet, and mobile devices. A key part of my contribution was developing smooth, interactive animations using GSAP (GreenSock Animation Platform) to enhance the user experience and bring the website's design to life."
                    url="https://www.ummalemaratpark.ae/en/Home"
                />

                {/* <ProjectCard
                    title={"Sharjah Islamic Bank"}
                    image="sib.png"
                    description="This is a Sharjah Islamic Bank official website. I did worked on this project"
                    url="http://gretiquemartin.com"
                /> */}

                <ProjectCard
                    title={"Gretique Matin"}
                    image="gretique-matin.png"
                    description="Worked as a Frontend Developer on the Gretique Martin portfolio website, creating responsive, visually engaging, and user-friendly interfaces. I was responsible for implementing modern frontend designs, ensuring a seamless experience across desktop, tablet, and mobile devices. A key part of my contribution was developing smooth."
                    url="http://gretiquemartin.com"
                />
                
            </div>
        </SectionContainer>    
        </>
     );
}
 
export default Projects;
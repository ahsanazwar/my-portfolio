
import Bio from "./bio";
import Contact from "./contact";
import Experience from "./experience";
import IntroSection from "./intro-section";
import ProjectsDone from "./projects-done";
import Social from "./social";


 
const MainBanner = () => {

    

    return ( 
        <>
            <div>
                <IntroSection
                    title="Ahsan Azwar"
                    designation="Frontend Developer"
                />
                <div className="flex items-center py-[70px] w-full flex-col">
                    <div className="container">
                        <div className="flex justify-between items-center">
                            <div className="md:w-96">
                                <Bio
                                    title="Bio"
                                    content="Highly skilled front-end developer with 6+ years of experience building
                                    websites and web applications using React JS, Next JS and TypeScript.
                                    Passionate about learning new tools and programming languages."
                                />

                                <Contact
                                    title="Contact"
                                    country="Karachi, Pakistan"
                                    email="ahsan.azwar@gmail.com"
                                    phone="+92 340 2301022"
                                />   
                            </div>

                            <div className="bg-purple-500 shadow-[0_0px_8px_2px_#ff29a6]">
                                <img src="dp.jpg" width={230} height={600}/>
                            </div>

                            <div className="md:w-96 text-right">
                                <Social 
                                    title="Social Profile"
                                    fbLink="https://www.facebook.com/ahsan.azwar"
                                    githhubLink="https://github.com/ahsanazwar"
                                    linkedinLink="https://linkedin.com/in/ahsan-azwar"
                                />

                                <Experience
                                    title="Years Of Experience"
                                    experience="6+"
                                />
                                
                                <ProjectsDone
                                    title="Projects Done"
                                    projects="30+"
                                />
                                   
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </>
     );
}
 
export default MainBanner;
import resumeLink from "@docs/ahsan-azwar.pdf";

const DownloadResume = () => {
    return ( 
        <div className="fixed left-0 top-1/2 -rotate-90 -translate-x-[40%]">
            <a href={resumeLink} target="_blank" className="bg-blue dark:bg-purple text-white px-5 pt-5 text-xl hover:opacity-50 transition duration-1000 cursor-pointer">Download Resume</a>
        </div>
     );
}
 
export default DownloadResume;
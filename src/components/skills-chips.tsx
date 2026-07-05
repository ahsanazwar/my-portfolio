// interface Props {
//     title?: string,
//     content?: string
// }
 
const SkillsChips = () => {
    return ( 
        <div className="flex items-center py-[0] sm:py-[0] w-full flex-col">
            <div className="container">
                <h2 className="text-blue dark:text-purple mb-2">Skills</h2>
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex gap-2">
                        <div className="rounded-md bg-pink-600 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
                            Javascript 
                        </div>
                        <div className="rounded-md bg-violet-600 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
                            React JS 
                        </div>
                        <div className="rounded-md bg-red-600 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
                            Next JS 
                        </div>
                        <div className="rounded-md bg-green-600 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
                            Typescript
                        </div>
                        <div className="rounded-md bg-amber-600 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
                            Material UI 
                        </div>   
                        <div className="rounded-md bg-emerald-600 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
                            Tailwind 
                        </div>                     
                        <div className="rounded-md bg-indigo-600 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
                            JQuery 
                        </div>
                        <div className="rounded-md bg-teal-600 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
                            Bootstrap
                        </div>
                        <div className="rounded-md bg-lime-600 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
                            HTML 
                        </div>
                        <div className="rounded-md bg-indigo-600 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
                            CSS 
                        </div>
                        <div className="rounded-md bg-cyan-600 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
                            SASS 
                        </div>
                        <div className="rounded-md bg-yellow-600 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
                            GSAP 
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

 
export default SkillsChips;
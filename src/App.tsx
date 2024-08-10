
import './App.css';
import { useEffect, useRef} from 'react';
import Career from './components/career'
import Education from './components/education'
import MainBanner from './components/main-banner'
import Projects from './components/projects'
import WebLoader from './components/web-loader'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SkillsSection from './components/skills-section';
// import ThemeContext from './context/theme/themeContext';

import ReactGA from "react-ga4";

const Track_ID = "G-VEBTE3N60Y"

ReactGA.initialize(Track_ID);

gsap.registerPlugin(ScrollTrigger);

function App() {
  const ref = useRef([]);
  ref.current = [];
  // const [theme, setTheme] = useState<any>("dark");

  // const {theme,setTheme} = useContext(ThemeContext);

  // const handleTheme = () =>{
  //   setTheme("light");
  // }


  useEffect(() => {
      gsap.to('.custom-pattern', {
        y: -60, 
        scrollTrigger: {
          trigger: '.custom-pattern',
          start: "bottom bottom",
          scrub: 2,
          snap: {
            snapTo: 'labels', // snap to the closest label in the timeline
            duration:2.5, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.1, // wait 0.2 seconds from the last scroll event before doing the snapping
            // ease: "power1.out" // the ease of the snap animation ("power3" by default)
        }
        }
      });

      // ReactGA.initialize([
      //   {
      //     trackingId: Track_ID,
      //   },
      // ]);

  }, [])


  return (
    <>
      {/* <img src="dark-logo.png" width={250} height={50} alt="Logo" /> */}
        <div className={`${"dark"}`}>
          <main className="dark:bg-black pt-10 px-7 relative z-10"> 
              <img src="pattern-left.png" className="custom-pattern fixed -left-7 bottom-7 -z-10 w-72 opacity-10 hidden sm:block"/>
              <img data-speed="0.8" src="pattern-right.png" className="custom-pattern fixed -right-7 bottom-7 -z-10 w-72 opacity-10 hidden sm:block"/>
            <WebLoader/>
            {/* <button onClick = {handleTheme}>Dark Mode</button> */}
            <MainBanner/>
            <Projects/>
            <Education/>
            <Career/>
            <SkillsSection/>
          </main>
        </div>
    </>
  )
}

export default App

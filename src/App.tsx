
import '@App.css';
import { useEffect, useRef, useContext} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactGA from "react-ga4";

import Career from '@components/career'
import Education from '@components/education'
import MainBanner from '@components/main-banner'
import Projects from '@components/projects'
import WebLoader from '@components/web-loader'
import SkillsSection from '@components/skills-section';
import Navbar from '@components/nav-bar';
import ThemeContext from '@context/theme/themeContext';
import CopyRight from '@components/copy-right';
import DownloadResume from '@components/download-resume';

const Track_ID = "G-VEBTE3N60Y"
ReactGA.initialize(Track_ID);

gsap.registerPlugin(ScrollTrigger);

function App() {
  const ref = useRef([]);
  ref.current = [];

  const {theme} = useContext(ThemeContext);

  


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

      gsap.set('.follower',{xPercent:-50,yPercent:-50});
      gsap.set('.cursor',{xPercent:-50,yPercent:-50});

      var follow = document.querySelector('.follower');
      var cur = document.querySelector('.cursor');
      const buttons = document.querySelectorAll("a");


      window.addEventListener('mousemove',e => {
          gsap.to(cur,0.2,{x:e.clientX,y:e.clientY});
          gsap.to(follow,0.9,{x:e.clientX,y:e.clientY});
      });
    
    buttons.forEach(function(button) {
      button?.addEventListener("mouseenter", function(e) {
        gsap.to('.follower', {
          x: e.clientX + 3,
          y: e.clientY + 3,
          transform: `scale(2)`,
        });
      });
    });

    buttons.forEach(function(button) {
      button?.addEventListener('mouseleave', () => {
        gsap.to('.follower', {
          transform: `scale(1)`,
        });
      });
    });
    
  }, [])


  return (
    <>
      {/* <img src="dark-logo.png" width={250} height={50} alt="Logo" /> */}
        <div className={`${theme && "dark"}`}>
          <main className="dark:bg-black pt-10 px-7 relative z-10"> 
              <img src="pattern-left.png" className="custom-pattern fixed -left-7 bottom-7 -z-10 w-72 opacity-10 hidden sm:block"/>
              <img data-speed="0.8" src="pattern-right.png" className="custom-pattern fixed -right-7 bottom-7 -z-10 w-72 opacity-10 hidden sm:block"/>
              <div className="hidden sm:block"></div>
              <div className="follower bg-blue dark:bg-purple hidden sm:block"></div>

            <WebLoader/>
            <Navbar/>
            <DownloadResume/>
            <MainBanner/>
            <Projects/>
            <Education/>
            <Career/>
            <SkillsSection/>
            <CopyRight/>
          </main>
        </div>
    </>
  )
}

export default App

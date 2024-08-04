
import './App.css';
import { useEffect, useRef } from 'react';
import Career from './components/career'
import Education from './components/education'
import MainBanner from './components/main-banner'
import Projects from './components/projects'
import WebLoader from './components/web-loader'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {
  const ref = useRef([]);
    ref.current = [];

    useEffect(() => {
        // ref.current.forEach((el) => {
        //     gsap.fromTo(el, { autoAlpha: 0 }, {
        //         autoAlpha: 1, left: 0,
        //         duration: 0.5, scrollTrigger: {
        //             trigger: el,
        //             start: "top bottom-=100",
        //             toggleActions: "play none none reverse"
        //         }
        //     })
        // })

        gsap.to('.left-pattern', {
          y: -600, 
          scrollTrigger: {
            trigger: '.left-pattern',
            start: "bottom bottom",
            scrub: 0.5,
            snap: {
              snapTo: 'labels', // snap to the closest label in the timeline
              duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
              delay: 0.1, // wait 0.2 seconds from the last scroll event before doing the snapping
              ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
          }
          }
        });
    }, [])

    // const addtoRefs = (el:any) => {
    //     if (el && !ref.current.includes(el)) {
    //         ref.current.push(el);
    //     }
    // }

  return (
    <>
      {/* <img src="dark-logo.png" width={250} height={50} alt="Logo" /> */}
      <main className="bg-black pt-10 relative z-10"> 
      <img   src="pattern-left.png" className="left-pattern fixed -left-7 bottom-7 -z-10 w-72 opacity-10"/>
        <img data-speed="0.8" src="pattern-right.png" className="left-pattern fixed -right-7 bottom-7 -z-10 w-72 opacity-10"/>
        {/* <WebLoader/> */}
        <MainBanner/>
        <Projects/>
        <Education/>
        <Career/>
      </main>
    </>
  )
}

export default App

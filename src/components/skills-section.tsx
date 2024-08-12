import { useContext } from 'react';
import ReactSkillbar from 'react-skillbars';
import SectionContainer from "@layouts/section-container";
import ThemeContext from '@context/theme/themeContext';


let darkColors = {
  bar: "#fff",
  title: {
    text: "#fff",
    background: "#FF29A6"
  }
};

let lightColors = {
  bar: "#ccc",
  title: {
    text: "#fff",
    background: "#007cd7"
  }
};

const skills = [
  { type: 'Javascript', level: 85 },
  { type: 'React', level: 85 },
  { type: 'Next JS', level: 85 },
  { type: 'TypeScript', level: 75 },
  { type: 'Tailwind', level: 80 },
  { type: 'JQuery', level: 80 },
  { type: 'Bootstrap', level: 90 },
  { type: 'HTML', level: 95 },
  { type: 'Sass', level: 90 },
  { type: 'CSS', level: 95 },
]

const SkillsSection = () => {
  const {theme} = useContext(ThemeContext);


    return ( 
        <SectionContainer heading="Skills">
            <div className="flex justify-center">
              <div className="w-11/12 md:w-2/3">
                {
                    theme? <ReactSkillbar skills={skills} colors={darkColors} symbolColor = "#FF29A6"/> : ""
                }

                {
                    theme? "" : <ReactSkillbar skills={skills} colors={lightColors} symbolColor = {"#007cd7"}/>
                }
              </div>
            </div>
        </SectionContainer>
     );
}

 
export default SkillsSection;
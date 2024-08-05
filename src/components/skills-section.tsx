import ReactSkillbar from 'react-skillbars';
import SectionContainer from "../layouts/section-container";
const SkillsSection = () => {
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
      ];
      const colors = {
        bar: "#fff",
        title: {
          text: "#fff",
          background: "#FF29A6"
        }
      };
    return ( 
        <SectionContainer heading="Skills">
            <ReactSkillbar skills={skills} colors={colors}>

            </ReactSkillbar>
        </SectionContainer>
     );
}

 
export default SkillsSection;
import { AboutMe } from "../about-me/AboutMe";
import { Education } from "../education/Education";
import { EmploymentHistory } from "../employment-history/EmploymentHistory";
import { Skills } from "../skills/Skills";
import { Section } from "./section/section.model";
import skillsIcon from "../../assets/skills.png";
import aboutMeIcon from "../../assets/about-me.png";
import educationIcon from "../../assets/education.png";
import workHistory from "../../assets/work-history.png";

export const sections: Section[] = [
  {
    id: "about-me",
    title: "About Me",
    component: <AboutMe />,
    translate: { x: -472, y: 98 },
    icon: aboutMeIcon,
  },
  {
    id: "employment",
    title: "Employment History",
    translate: { x: -294, y: 98 },
    component: <EmploymentHistory />,
    icon: workHistory,
  },
  {
    id: "education",
    title: "Education",
    component: <Education />,
    translate: { x: -106, y: 98 },
    icon: educationIcon,
  },
  {
    id: "skills",
    title: "Skills",
    component: <Skills />,
    translate: { x: 30, y: 98 },
    icon: skillsIcon,
  },
];

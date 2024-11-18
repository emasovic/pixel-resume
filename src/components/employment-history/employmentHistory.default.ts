type Job = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
};

export const employmentHistory: Job[] = [
  {
    title: "Senior Fullstack Developer",
    company: "Interventure, Belgrade",
    startDate: "AUGUST 2022",
    endDate: "PRESENT",
    responsibilities: [
      "Actively participated in code reviews and architectural decisions.",
      "Led the initial architecture setup, utilizing Vite, React Query, Context API, Material UI, and Three.js on the frontend.",
      "Contributed to backend feature development using Python and FastAPI.",
      "Played a key role in reducing software issues by 35% and accelerating delivery timelines for the Matterhorn team.",
      "Contributed to the frontend agreed practices forum, fostering tailored software discussions and documentation for the team's unique context.",
      "Delivered a well-designed web application for diagnosing and managing a drone fleet using MUI component library, React, and TypeScript, resulting in a 95% adoption rate and a 90% satisfaction rate.",
      "Participated in an engineering dojo, focusing on Test-Driven Development (TDD) and applying the driver/instructor approach to coding katas, enhancing team collaboration and technical practices.",
    ],
  },
  {
    title: "Front-End Developer",
    company: "Scripttic, Belgrade",
    startDate: "MARCH 2021",
    endDate: "JULY 2022",
    responsibilities: [
      "Worked on a social network app for employees using React, Redux, and Material UI.",
      "Involved in grooming sessions and estimations.",
      "Collaborated closely with backend, QA, UI/UX teams, and the product manager.",
      "Contributed to the app's architecture and introduced Redux Toolkit to reduce boilerplate and accelerate development.",
      "Led the upgrade and migration of packages to maintain up-to-date dependencies.",
      "Mentored younger developers to enhance their skills and integrate into the team.",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Spinview Global, Belgrade",
    startDate: "OCTOBER 2018",
    endDate: "FEBRUARY 2021",
    responsibilities: [
      "Worked on a platform that manipulated VR tours using krpano.",
      "Developed the 'Brochure Tool,' which increased sales by 20%, enabling users to create brochures from VR tours or custom templates.",
      "Designed the tool with various sections: main representation, gallery, spotlight, embed, VR tour, and custom table.",
      "Contributed to backend feature development using Node.js and frontend development with React.",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Cybele Technologies, Belgrade",
    startDate: "SEPTEMBER 2017",
    endDate: "SEPTEMBER 2018",
    responsibilities: [
      "Built an app for calculating employee salaries based on clock-ins and clock-outs, with admin capabilities to define hourly rates and assign shifts.",
      "Developed an employee monitoring app to track work time and website visits.",
      "Built an MVP app for bidding on bitcoins.",
      "Led the frontend team, providing guidance and direction.",
      "Designed frontend applications to ensure a smooth and efficient user experience.",
    ],
  },
];

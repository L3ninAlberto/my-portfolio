import { useState } from "react";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";

function App() {
  const sections = [
    {
      name: "Proyectos",
      content: <ProjectsSection />,
    },
    {
      name: "Habilidades",
      content: <SkillsSection />,
    },
    {
      name: "Formación y experiencia",
      content: <ExperienceSection />,
    },
  ];

  const [currentSection, setCurrentSection] = useState(sections[0]);

  const changeSection = (index) => setCurrentSection(sections[index]);

  return (
    <div className="px-28 py-16">
      <div className="flex items-center justify-center gap-6 py-5 mb-10 border-2 border-primary shadow-box">
        <div className="w-40 h-40">
          <img
            src="imgs/face.webp"
            alt="Face"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-primary">
            Lenin Alberto Gómez Durán
          </h1>
          <p className="text-2xl font-bold text-secondary">
            Ingeniero en Desarrollo y Gestión de Software
          </p>
        </div>
      </div>

      <div>
        <div className="mb-5 border-b-2 border-primary">
          {sections.map((section, index) => (
            <button
              key={index}
              type="button"
              className={`py-2 px-8 text-lg font-bold border-2 border-primary cursor-pointer ${
                currentSection.name === section.name
                  ? "bg-primary text-bg"
                  : "text-primary hover:bg-primary hover:text-bg"
              }`}
              onClick={() => changeSection(index)}
            >
              {section.name}
            </button>
          ))}
        </div>

        {/* section content */}
        {currentSection.content}
      </div>
    </div>
  );
}

export default App;

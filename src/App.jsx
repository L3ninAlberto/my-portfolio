import { useState } from "react";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import UpButton from "./components/UpButton";

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
    <div className="relative px-28 py-16">
      <div className="flex items-center justify-center gap-6 py-5 border-b-2 border-b-primary">
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

      <div className="mb-16 -translate-y-0.5">
        <div className="text-center mb-5">
          {sections.map((section, index) => (
            <button
              key={index}
              type="button"
              className={`w-72 py-2 font-bold border-2 border-primary cursor-pointer ${
                currentSection.name === section.name
                  ? "text-primary outline-box"
                  : "text-secondary"
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

      <UpButton />

      <footer className="flex justify-between py-2 border-t-2 border-primary">
        <div className="flex gap-16">
          <div>
            <p className="mb-1 text-primary">Sígueme</p>
            <div className="flex gap-2">
              <div className="w-6 h-6 aspect-square bg-secondary" />
              <div className="w-6 h-6 aspect-square bg-secondary" />
              <div className="w-6 h-6 aspect-square bg-secondary" />
            </div>
          </div>
          <div>
            <p className="mb-1 text-primary">Contáctame</p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="w-6 h-6 aspect-square bg-secondary" />
                <p className="text-secondary">+52 694 95 110 95</p>
              </div>
              <div className="flex gap-2">
                <div className="w-6 h-6 aspect-square bg-secondary" />
                <p className="text-secondary">lgomez@example.com</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <a href="#" className="flex gap-2">
            <div className="w-6 h-6 aspect-square bg-secondary" />
            <p className="text-primary">Descarga mi CV</p>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

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
      name: "Experiencia",
      content: <ExperienceSection />,
    },
  ];

  const [currentSection, setCurrentSection] = useState(sections[0]);

  const changeSection = (index) => setCurrentSection(sections[index]);

  return (
    <div className="hp py-16">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 gap-y-2 py-5 border-b-2 border-b-secondary">
        <div className="w-40 h-40">
          <img
            src="imgs/face.webp"
            alt="Face"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="text-start">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Lenin Alberto Gómez Durán
          </h1>
          <p className="text-lg md:text-xl font-bold text-secondary">
            Ingeniero en Desarrollo y Gestión de Software
          </p>
        </div>
      </div>

      <div className="text-center mb-5">
        {sections.map((section, index) => (
          <button
            key={index}
            type="button"
            className={`w-1/3 py-2 font-bold text-secondary cursor-pointer ${
              currentSection.name === section.name
                ? "border-b-2 border-secondary"
                : ""
            }`}
            onClick={() => changeSection(index)}
          >
            {section.name}
          </button>
        ))}
      </div>

      {/* section content */}
      {currentSection.content}

      <footer className="mt-5 grid md:grid-cols-3 gap-5 py-2 text-secondary border-t-2 border-secondary">
        <div>
          <p className="font-bold">Sígueme</p>
          <div className="flex items-center gap-2 text-xl">
            <a href="#" className="link">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" className="link">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div>
          <p className="font-bold">Contáctame</p>
          <div className="flex items-center gap-2">
            <i class="fa-solid fa-phone"></i>
            <p>+52 694 95 110 95</p>
          </div>
          <div className="flex items-center gap-2">
            <i class="fa-solid fa-envelope"></i>
            <p>lgomez@example.com</p>
          </div>
        </div>
        <div>
          <p className="font-bold">Recursos</p>
          <div className="flex items-center gap-2">
            <i class="fa-solid fa-font-awesome"></i>
            <p>
              Íconos de{" "}
              <a
                href="https://fontawesome.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Font Awesome
              </a>
            </p>
          </div>
        </div>
      </footer>

      <UpButton />
    </div>
  );
}

export default App;

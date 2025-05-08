import SkillsSubsection from "./SkillsSubsection";
import Subtitle from "./Subtitle";
import { technologies } from "../data";

export default function SkillsSection() {
  return (
    <>
      <section className="mb-6">
        <Subtitle>Tecnologías</Subtitle>

        <ul className="grid grid-cols-3 gap-6">
          {Object.values(technologies).map((technology, index) => (
            <li
              key={index}
              className="flex gap-2 items-center p-2 border-2 border-primary rounded-sm"
            >
              <div className="w-12 h-12 flex justify-center items-center">
                {technology.icon}
              </div>
              <p className="font-bold text-secondary">{technology.name}</p>
            </li>
          ))}
        </ul>
      </section>

      <SkillsSubsection
        title={"Tecnologías"}
        skills={Array.from({ length: 10 })}
      />
      <SkillsSubsection
        title={"Herramientas"}
        skills={Array.from({ length: 10 })}
      />
    </>
  );
}

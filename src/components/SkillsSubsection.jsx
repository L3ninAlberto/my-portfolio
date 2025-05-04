import Subtitle from "./Subtitle";

export default function SkillsSubsection({ title, skills = [] }) {
  return (
    <section className="mb-6">
      <Subtitle>{title}</Subtitle>

      <ul className="grid grid-cols-3 gap-6">
        {skills.map((_, index) => (
          <li
            key={index}
            className="flex gap-2 items-center p-2 text-secondary border-2 border-primary"
          >
            <img
              src="imgs/html.png"
              alt="skill"
              className="w-10 h-10 aspect-square object-contain"
            />
            <p>Skill</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

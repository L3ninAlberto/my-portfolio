import Subtitle from "./Subtitle";

export default function SkillsSubsection({ title, skills = [] }) {
  return (
    <section className="mb-6">
      <Subtitle>{title}</Subtitle>

      <ul className="grid grid-cols-3 gap-6">
        {skills.map((_, index) => (
          <li
            key={index}
            className="flex gap-2 items-center p-2 text-yellow-500 border-2 border-primary rounded-sm"
          >
            <i class="fa-brands fa-js text-4xl"></i>
            <p className="font-bold">JavaScript</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

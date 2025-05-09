import { technologies } from "../data";

export default function SkillsSection() {
  return (
    <section className="mb-6">
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Object.values(technologies).map((technology, index) => (
          <li key={index} className="flex gap-2 items-center p-2 card">
            <div className="w-12 h-12 flex justify-center items-center">
              {technology.icon}
            </div>
            <p className="font-bold text-secondary">{technology.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

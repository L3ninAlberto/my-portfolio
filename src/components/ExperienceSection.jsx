import { workExperiences } from "../data";

export default function ExperienceSection() {
  return (
    <section>
      <ul className="grid lg:grid-cols-2 gap-5">
        {workExperiences.map((experience, index) => (
          <li key={index} className="card">
            <h3 className="head">{experience.name}</h3>
            <div className="flex gap-5">
              <div className="grow">
                <p className="font-bold">{experience.period}</p>
                <p className="text-sm">{experience.description}</p>
              </div>
              <div className="w-28 h-28 aspect-square">
                <img
                  src={`assets/work_experiences/${experience.img}`}
                  alt={experience.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

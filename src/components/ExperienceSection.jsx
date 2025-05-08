import { workExperiences } from "../data";

export default function ExperienceSection() {
  return (
    <section>
      <ul className="grid grid-cols-2 gap-5">
        {workExperiences.map((experience, index) => (
          <div
            key={index}
            className="p-5 text-secondary border-2 border-secondary rounded-sm"
          >
            <h3 className="mb-4 text-xl head">{experience.name}</h3>
            <div className="flex gap-5">
              <div>
                <p className="font-bold">{experience.period}</p>
                <p className="text-sm">{experience.description}</p>
              </div>
              <div className="w-32 h-32 aspect-square">
                <img
                  src={`assets/work_experiences/${experience.img}`}
                  alt={experience.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
}

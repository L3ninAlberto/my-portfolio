import { projects } from "../data";

export default function ProjectsSection() {
  return (
    <section className="flex flex-col gap-5">
      {projects.map((project, index) => (
        <article key={index} className={`card`}>
          <h3 className="head">{project.name}</h3>
          <div className="flex flex-col lg:flex-row gap-5">
            <ul className="w-full lg:min-w-4/6 h-fit aspect-video flex gap-2 overflow-x-auto">
              {Array.from({ length: project.imgsQty }).map((_, index) => (
                <img
                  key={index}
                  src={`assets/projects_imgs/${project.imgsAlias}/${
                    project.imgsAlias
                  }${index + 1}.webp`}
                  alt="img"
                  className="w-full h-full object-fill rounded-sm cursor-pointer"
                />
              ))}
            </ul>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold text-secondary">
                {project.category}
              </p>

              <p className="text-secondary text-sm">{project.description}</p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit flex gap-1 items-center text-lg font-bold link"
                >
                  <i class="fa-solid fa-globe"></i>
                  Ir al proyecto
                </a>
              )}

              <p className="font-bold">Hecho con:</p>
              <ul className="w-full flex flex-wrap gap-3">
                {project.technologies.map((technology, index) => (
                  <li key={index} className="flex flex-col items-center">
                    {technology.icon}
                    <p className="text-secondary">{technology.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

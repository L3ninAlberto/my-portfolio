import Project from "./Project";
import { projects } from "../data";

export default function ProjectsSection() {
  return (
    <section>
      <ul className="grid grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            category={project.category}
            description={project.description}
            link={project.link}
            imgsAlias={project.imgsAlias}
            imgsQty={project.imgsQty}
            technologies={project.technologies}
          />
        ))}
      </ul>
    </section>
  );
}

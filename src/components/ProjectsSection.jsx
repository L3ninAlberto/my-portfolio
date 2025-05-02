import Project from "./Project";

export default function ProjectsSection() {
  return (
    <section>
      <ul className="grid grid-cols-2 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <Project key={index} />
        ))}
      </ul>
    </section>
  );
}

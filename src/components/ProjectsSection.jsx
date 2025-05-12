import { useState } from "react";
import { projects } from "../data";

export default function ProjectsSection() {
  const [showImage, setShowImage] = useState(false);
  const [imagePath, setImagePath] = useState(null);

  const openImage = (path) => {
    document.body.style.overflow = "hidden"; // disable page scroll
    setShowImage(true);
    setImagePath(path);
  };

  const closeImage = () => {
    document.body.style.overflow = "auto"; // enable page scroll
    setShowImage(false);
    setImagePath(null);
  };

  return (
    <>
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
                    onClick={() =>
                      openImage(
                        `assets/projects_imgs/${project.imgsAlias}/${
                          project.imgsAlias
                        }${index + 1}.webp`
                      )
                    }
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

      <div
        className={`z-10 fixed top-0 left-0 w-full h-full p-10 flex justify-center items-center ${
          showImage ? "block" : "hidden"
        }`}
        style={{ backdropFilter: "blur(5px)" }}
      >
        <img
          src={imagePath}
          alt="Imagen ampliada"
          className="object-contain rounded-sm shadow-xl"
        />
        <button
          className="absolute top-3 right-3 cursor-pointer"
          onClick={closeImage}
        >
          <i className="fa-solid fa-xmark text-white text-2xl" />
        </button>
      </div>
    </>
  );
}

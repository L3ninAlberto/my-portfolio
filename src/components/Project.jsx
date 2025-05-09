import { useState } from "react";

export default function Project({ ...props }) {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => setExpand(!expand);

  return (
    <li
      className={`w-full h-max card ${
        expand
          ? "lg:col-span-2"
          : "hover:cursor-pointer hover:outline-2 hover:-outline-offset-8 hover:outline-secondary"
      }`}
      onClick={toggleExpand}
    >
      <h3 className="head">{props.name}</h3>

      {expand ? (
        <div className="grow flex flex-col gap-2">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="font-bold text-secondary">{props.category}</p>
            {props.link && (
              <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit flex gap-1 items-center link"
              >
                <i class="fa-solid fa-up-right-from-square"></i>
                Ir al proyecto
              </a>
            )}
          </div>
          <ul className="w-full aspect-video lg:h-[505px] flex gap-2 overflow-x-auto">
            {Array.from({ length: props.imgsQty }).map((_, index) => (
              <img
                key={index}
                src={`assets/projects_imgs/${props.imgsAlias}/${
                  props.imgsAlias
                }${index + 1}.webp`}
                alt="img"
                className="w-full h-full object-cover object-top"
              />
            ))}
          </ul>
          <p className="text-secondary text-sm">{props.description}</p>
          <p className="font-bold">Hecho con:</p>
          <ul className="w-full flex flex-wrap gap-3">
            {props.technologies.map((technology, index) => (
              <li key={index} className="flex flex-col items-center">
                {technology.icon}
                <p className="text-secondary">{technology.name}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="grow">
          <img
            src={`assets/projects_imgs/${props.imgsAlias}/${props.imgsAlias}1.webp`}
            alt="Imagen destacada"
            className="w-full aspect-video object-cover"
          />
        </div>
      )}
    </li>
  );
}

import { useState } from "react";

export default function Project({ ...props }) {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => setExpand(!expand);

  return (
    <div
      className={`w-full h-max flex flex-col gap-4 p-4 text-center border-2 border-secondary rounded-sm ${
        expand
          ? "lg:col-span-2 shadow-md"
          : "hover:cursor-pointer hover:outline-2 hover:-outline-offset-8 hover:outline-secondary"
      }`}
      onClick={toggleExpand}
    >
      <p className="head text-lg">{props.name}</p>

      {expand ? (
        <div className="grow flex flex-col gap-4">
          <p className="font-bold text-secondary">{props.category}</p>
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
          <p className="head">Tecnologías utilizadas</p>
          <ul className="w-full flex flex-wrap justify-center gap-3">
            {props.technologies.map((technology, index) => (
              <li key={index} className="flex flex-col">
                {technology.icon}
                <p className="text-secondary">{technology.name}</p>
              </li>
            ))}
          </ul>
          {props.link && (
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="self-center w-fit flex gap-1 items-center text-secondary hover:underline"
            >
              Ir al proyecto
              <i class="fa-solid fa-up-right-from-square"></i>
            </a>
          )}
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
    </div>
  );
}

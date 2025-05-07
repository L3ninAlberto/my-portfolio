import { useState } from "react";

export default function Project() {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => setExpand(!expand);

  return (
    <div
      className={`w-full h-max flex flex-col gap-4 p-4 text-center border-2 border-primary rounded-sm ${
        expand
          ? "col-span-2 shadow-md outline-box"
          : "hover:cursor-pointer hover:outline-2 hover:-outline-offset-4 hover:outline-primary"
      }`}
      onClick={toggleExpand}
    >
      <p className="head-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </p>

      {expand ? (
        <div className="grow flex flex-col gap-4">
          <p className="font-bold text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <ul className="w-full flex gap-2 overflow-x-auto">
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={index} className="min-w-full max-w-full">
                <img src="imgs/project.webp" alt="project" />
              </li>
            ))}
          </ul>

          <p className="text-secondary text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            assumenda et magnam, adipisci, quisquam quidem quis ex doloremque
            tempora consequatur facere fugiat a, aspernatur dolorum eligendi
            dicta non provident. Veniam.
          </p>

          <p className="head-secondary">Tecnologías utilizadas</p>

          <ul className="w-full flex justify-center gap-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <li key={index}>
                <i class="fa-brands fa-html5 text-orange-600 text-5xl"></i>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="grow">
          <img src="imgs/project.webp" alt="project" className="h-full" />
        </div>
      )}
    </div>
  );
}

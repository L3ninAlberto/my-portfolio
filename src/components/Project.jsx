import { useState } from "react";

export default function Project() {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => setExpand(!expand);

  return (
    <div
      className={`w-full h-max flex flex-col gap-4 p-4 border-2 border-primary ${
        expand ? "col-span-2 shadow-box" : "hover:shadow-box cursor-pointer"
      }`}
      onClick={toggleExpand}
    >
      <p className="text-primary text-lg font-bold border-b-2 border-primary">
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

          <p className="font-bold text-primary border-b-2 border-primary">
            Tecnologías utilizadas
          </p>

          <ul className="w-full grid grid-cols-20 gap-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <li key={index}>
                <img
                  src="imgs/html.png"
                  alt=""
                  className="w-full h-full aspect-square object-contain"
                />
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

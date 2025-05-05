import Subtitle from "./Subtitle";

export default function ExperienceSection() {
  return (
    <section>
      <Subtitle>Formación académica</Subtitle>

      <div className="mb-6 p-5 border-2 border-primary rounded-sm">
        <h3 className="mb-4 text-2xl head-primary">
          Universidad Tecnológica de Escuinapa
        </h3>
        <div className="flex">
          <div>
            <p className="text-secondary text-lg font-bold">
              TÉCNICO SUPERIOR UNIVERSITARIO EN TECNOLOGÍAS DE LA INFORMACIÓN,
              ÁREA DESARROLLO DE SOFTWARE MULTIPLATAFORMA
            </p>
            <p className="mb-2 text-primary">2020 - 2022</p>

            <p className="text-secondary text-lg font-bold">
              INGENIERÍA EN DESARROLLO Y GESTIÓN DE SOFTWARE
            </p>
            <p className="text-primary">2022 - 2024</p>
          </div>
          <div className="w-40 h-40 aspect-square">
            <img
              src="imgs/utesc-logo.webp"
              alt="University logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <Subtitle>Experiencia laboral</Subtitle>

      <ul className="grid grid-cols-2 gap-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="p-5 border-2 border-primary rounded-sm">
            <h3 className="mb-4 text-xl head-primary">
              Universidad Tecnológica de Escuinapa
            </h3>
            <div className="flex gap-5">
              <div>
                <p className="text-secondary text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi possimus in corrupti vero at, labore aspernatur nam
                  adipisci, magnam dolorem cupiditate id beatae aliquam natus
                  aut laboriosam deleniti doloremque magni.
                </p>
                <p className="text-primary">Mayo - Agosto del 2022</p>
              </div>
              <div className="w-32 h-32 aspect-square">
                <img
                  src="imgs/utesc-logo.webp"
                  alt="University logo"
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

const categories = {
  S: "Estadías profesionales",
  UT: "Universitario en equipo",
  UI: "Universitario individual",
  P: "Desarrollo personal",
};

export const technologies = {
  HTML: {
    name: "HTML",
    icon: <i className="fa-brands fa-html5 text-[#F16529] text-4xl"></i>,
  },
  CSS: {
    name: "CSS",
    icon: <i className="fa-brands fa-css text-[#663399] text-4xl"></i>,
  },
  JS: {
    name: "JavaScript",
    icon: <i className="fa-brands fa-js text-[#f1f114] text-4xl"></i>,
  },
  PHP: {
    name: "PHP",
    icon: <i className="fa-brands fa-php text-[#703ef7] text-4xl"></i>,
  },
  REACT: {
    name: "React",
    icon: <i className="fa-brands fa-react text-[#19c0f6] text-4xl"></i>,
  },
  LARAVEL: {
    name: "Laravel",
    icon: <i className="fa-brands fa-laravel text-[#fa1906] text-4xl"></i>,
  },
  GIT: {
    name: "GIT",
    icon: <i className="fa-brands fa-git-alt text-[#ea4233] text-4xl"></i>,
  },
  MYSQL: {
    name: "MySQL",
    icon: <i className="fa-solid fa-database text-[#1275b6] text-4xl"></i>,
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    icon: <i className="fa-brands fa-bootstrap text-[#801af9] text-4xl"></i>,
  },
};

export const projects = [
  {
    name: "Examen UTEsc",
    category: categories.S,
    description:
      "Aplicación web con el objetivo de evaluar el conocimiento previo de todos los aspirantes de nuevo ingreso que quieren cursar alguna de las carreras de la Universidad Tecnológica de Escuinapa en el área de Expresión Oral y Escrita, Matemáticas e Inglés.",
    link: null,
    imgsAlias: "eu",
    imgsQty: 4,
    technologies: [
      technologies.REACT,
      technologies.PHP,
      technologies.MYSQL,
      technologies.GIT,
    ],
  },
  {
    name: "Sitio IDGS",
    category: categories.UT,
    description:
      "Sitio web con el objetivo de promocionar el contenido de la carrera Ingeniería en Desarrollo y Gestión de Software de la Universidad Tecnológica de Escuinapa a todas las personas interesadas en cursar, principalmente estudiantes de preparatoria.",
    link: "https://sitioidgs.proyectosidgs.com/",
    imgsAlias: "sidgs",
    imgsQty: 3,
    technologies: [
      technologies.REACT,
      technologies.PHP,
      technologies.MYSQL,
      technologies.GIT,
    ],
  },
  {
    name: "Aula Virtual de Idiomas UTEsc",
    category: categories.UI,
    description:
      "Aplicación web responsiva (enfocada principalmente a uso móvil) para ayudar a los estudiantes de la Universidad Tecnológica de Escuinapa a reforzar sus conocimientos de los distintos temas del idioma Inglés, cuya principal función es el seguimiento de los resultados registrados de los exámenes que se realicen al finalizar cada tema para evaluar el progreso del aprendizaje.",
    link: null,
    imgsAlias: "avi",
    imgsQty: 7,
    technologies: [
      technologies.REACT,
      technologies.PHP,
      technologies.MYSQL,
      technologies.GIT,
    ],
  },
  {
    name: "Servicios UTEsc",
    category: categories.UT,
    description:
      "Aplicación web para que todos los estudiantes interesados publiquen sus habilidades a modo de servicios que otros estudiantes pueden necesitar, creando así una red de colaboración mutua entre todos los estudiantes de la Universidad Tecnológica de Escuinapa.",
    link: null,
    imgsAlias: "su",
    imgsQty: 3,
    technologies: [
      technologies.HTML,
      technologies.CSS,
      technologies.JS,
      technologies.LARAVEL,
      technologies.MYSQL,
    ],
  },
  {
    name: "Stainart",
    category: categories.UT,
    description:
      "Aplicación web enfocada en la publicación de obras de arte plástica (pintura, dibujo, manualidades, escultura, etc.) a modo de red social, donde cualquier persona tiene la oportunidad de dar a conocer sus habilidades.",
    link: null,
    imgsAlias: "st",
    imgsQty: 3,
    technologies: [
      technologies.HTML,
      technologies.CSS,
      technologies.JS,
      technologies.BOOTSTRAP,
      technologies.PHP,
      technologies.MYSQL,
    ],
  },
  {
    name: "Sonic Enemigos",
    category: categories.P,
    description:
      "Compendio de información, imágenes y videos de algunos de los enemigos más poderosos de la franquicia de Sonic The Hedgehog.",
    link: null,
    imgsAlias: "se",
    imgsQty: 4,
    technologies: [technologies.HTML, technologies.CSS, technologies.JS],
  },
  {
    name: "Minecraft shopping cart",
    category: categories.P,
    description:
      "Simulación de un carrito de compra inspirado en el universo del videojuego Minecraft.",
    link: null,
    imgsAlias: "msc",
    imgsQty: 1,
    technologies: [
      technologies.HTML,
      technologies.CSS,
      technologies.JS,
      technologies.GIT,
    ],
  },
  {
    name: "Routime",
    category: categories.UT,
    description:
      "Aplicación web que permite agendar las actividades de cualquier persona a lo largo de los días de la semana de manera sencilla e intuitiva.",
    link: null,
    imgsAlias: "rt",
    imgsQty: 2,
    technologies: [
      technologies.REACT,
      technologies.BOOTSTRAP,
      technologies.PHP,
      technologies.MYSQL,
    ],
  },
];

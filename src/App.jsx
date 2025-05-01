function App() {
  return (
    <div className="hp flex flex-col gap-y-16">
      <div className="flex items-center justify-center gap-6 py-5 mt-16 border-2 border-primary shadow-box">
        <div className="w-40 h-40">
          <img
            src="imgs/face.webp"
            alt="Face"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-primary">
            Lenin Alberto Gómez Durán
          </h1>
          <p className="text-2xl font-bold text-secondary">
            Ingeniero en Desarrollo y Gestión de Software
          </p>
        </div>
      </div>

      <div className="text-primary text-2xl">
        <button>Proyectos</button>
        <button>Habilidades</button>
        <button>Formación y experiencia</button>
      </div>
    </div>
  );
}

export default App;

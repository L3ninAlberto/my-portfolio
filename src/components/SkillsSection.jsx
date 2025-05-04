import SkillsSubsection from "./SkillsSubsection";

export default function SkillsSection() {
  return (
    <>
      <SkillsSubsection
        title={"Tecnologías"}
        skills={Array.from({ length: 10 })}
      />
      <SkillsSubsection
        title={"Herramientas"}
        skills={Array.from({ length: 10 })}
      />
    </>
  );
}

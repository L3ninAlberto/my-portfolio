import { useEffect, useState } from "react";

export default function UpButton() {
  const [visible, setVisible] = useState(false);

  const up = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 250);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      className={`${
        visible ? "block" : "hidden"
      } fixed bottom-5 right-5 w-11 h-11 flex justify-center items-center cursor-pointer card rounded-full`}
      onClick={up}
    >
      <i className="fa-solid fa-caret-up text-2xl"></i>
    </button>
  );
}

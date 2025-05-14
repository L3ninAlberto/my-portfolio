export default function SocialMedia({ header = false }) {
  return (
    <div
      className={`flex items-center gap-2 text-xl ${
        header ? "justify-center lg:justify-start" : ""
      }`}
    >
      <a
        href="https://www.linkedin.com/in/leningomezdev/"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/L3ninAlberto"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        <i className="fa-brands fa-github"></i>
      </a>
    </div>
  );
}

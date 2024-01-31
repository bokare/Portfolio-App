import { Link } from "react-router-dom";
import "./Button.css";

function Button({ text, to = "/contacts", target = "" }) {
  return (
    <Link to={to} id="mylink" target={target}>
      <button
        id="mybtn"
        type="button"
        className="btn px-5 py-2"
        style={{
          backgroundColor: "#EC5B53",
          color: "white",
          fontSize: "1.2rem",
          transition: "background-color 0..5s ease-in-out",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#581845")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#EC5B53")}
      >
        {text}
        <i class="fas fa-chevron-right"></i>
      </button>
    </Link>
  );
}

export default Button;

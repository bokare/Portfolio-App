import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
    const resumeUrl = process.env.PUBLIC_URL + "/resume.pdf" ;
  return (
    
    <footer>
      <div className="foot-panel1">
        <Link to="#">Back To Top</Link>
      </div>

      <div className="foot-panel2">
        <ul>
          <h2>Useful Links</h2>
          <Link to="/">Home</Link>
          <Link to="/education">Education</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/acievements">Achievements</Link>
          <Link to={resumeUrl} target="_blank">See My Resume</Link>
        </ul>

        <ul>
          <h2>Get In Touch</h2>
          <Link to="https://github.com/bokare" target="_blank">Github</Link>
          <Link to="https://www.linkedin.com/feed/?trk=404_page" target="_blank">LinkedIn</Link>
          <Link to="https://twitter.com/Vaibhav_b_patil" target="_blank">Twitter</Link>
          <Link to="mailto:bokarevk2001@gmail.com" target="_blank">Gmail</Link>
          <Link to="tel:+9561157845" target="_blank">Teleohone</Link>
        </ul>
      </div>

      <div className="foot-panel4">
        Copyright &copy; 2024 All rights reserved | This website is made with
        &hearts; by
        <cite> Vaibhav Bokare</cite>
      </div>
    </footer>
  );
}

export default Footer;

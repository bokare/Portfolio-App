import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeTheme } from "../store/store";
import "../App.css";

const Navbar = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  console.log(theme);
  const resumeFileName = "resume.pdf";
  const resumeUrl = process.env.PUBLIC_URL + "/" + resumeFileName;
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary p-0 "
      data-bs-theme={`${theme}`}
      style={{ fontSize: "1.3rem" ,position:"sticky", width:"100%" ,top:"0" ,zIndex:"5" ,}}
    >
      <div className="container-fluid" style={{backgroundColor:""}}>
        <Link className="navbar-brand px-4" to="/">
          <img
            src="https://res.cloudinary.com/dyzdwawer/image/upload/v1706381806/xxnnvbzwceaz8vdglkh9.jpg"
            alt="Bootstrap"
            width="50"
            height="40"
          />
          <span
            className="font-monospace align-middle m-1 px-2 "
            style={{ letterSpacing: "0.3rem" ,fontSize:"1.3rem"  ,fontWeight:"600" ,color:""}}
          >
            PORTFOLIO
          </span>
        </Link>
        <button
          className="navbar-toggler pr-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse px-3"
          id="navbarSupportedContent"
          style={{fontWeight:"400"}}
        >
          <ul className="navbar-nav ms-auto  mb-lg-0m px-2 p-3">
            <li className="nav-item" activeClassName="active">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item" activeClassName="active">
              <Link className="nav-link" to="/education">
                Education
              </Link>
            </li>
            <li className="nav-item" activeClassName="active">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item" activeClassName="active">
              <Link className="nav-link" to="/achievements">
                Achievements
              </Link>
            </li>
            <li className="nav-item" activeClassName="active">
              <Link className="nav-link" to="/contacts">
                Contacts
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={resumeUrl} target="_blank">
                Resume
              </a>
            </li>
            <li
              id="toggle"
              className="nav-item  my-auto d-block px-2"
              onClick={() => dispatch(changeTheme())}
            >
              {theme === "light" ? (
                <i className="fa-solid fa-moon"></i>
              ) : (
                <i id="sun" className="fa-solid fa-sun" style={{ color: "white" }}></i>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

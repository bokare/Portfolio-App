import Button from "./Button";
import "../App.css";
// import { faMonero } from "@fortawesome/free-brands-svg-icons";
import {useSelector } from "react-redux";
import darkImage from "../assets/bg-dark.jpg";
import lightImage from "../assets/bg-light.jpg";

function About() {
  const imgStyle = {
    height: "80vh", // Adjust the percentage as needed
    position: "relative",
    margin: 0,
    padding: 0,
    border: "none",
    color: "black",
    fontFamily: "faMonero",
  };
  const theme = useSelector((state) => state.theme);
  // let imgurl =
  //   theme === "dark"
  //     ? "https://res.cloudinary.com/dyzdwawer/image/upload/v1706729099/samples/about%20dark.jpg"
  //     : "https://res.cloudinary.com/dyzdwawer/image/upload/v1706510551/homebg.jpg";

  let imgurl = theme === "dark" ? darkImage : lightImage;

  return (
    <div id="about">
    <div className="card " style={imgStyle}>
      <img
        src={imgurl}
        className="card-img "
        alt="Home Backgroung"
        style={{ height: "88vh", width: "100%", objectFit: "cover" }}
      />
      <div
        className="card-img-overlay px-4 container mb-5 "
        style={{ color: theme === "dark" ? "white" : "black" }}
      >
        <h1 className="card-title display-2 mt-5 mb-1"> I'm Developer</h1>
        <h1 className="card-title display-2 mb-4">Vaibhav Bokare</h1>
        <h3
          className="card-text px-2 mb-3"
          style={{ textAlign: "justify" }}
        >
          I am a Software engineer completed my graduation in
          2023. Passionate about coding and it's potential, i am eager to
          contribute my expertise to optimized operation through Programming
          based solution.
        </h3>
        <Button text="Hire Me" />
      </div>
    </div></div>
  );
}

export default About;

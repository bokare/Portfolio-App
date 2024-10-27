import "./Button.css";
import Skill from "./Skill";
import About from "./About";
import nextImage from "../assets/nextjs-icon.png";
import dsa from "../assets/dsa.png";

function Home() {
  const skills = [
    {
      title: "Next.js",
      desc: "Proficient in Next.js, a React framework for building fast, SEO-friendly applications with server-side rendering and static generation.",
      imgurl: nextImage,
    },
    {
      title: "ReactJS",
      desc: "Skilled in developing interactive and responsive user interfaces using React JS which is a popular JavaScript library.",
      imgurl:
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1706540997/samples/react.png",
    },
    
    {
      title: "JavaScript",
      desc: "Proficient in JavaScript, leveraging its capabilities to craft dynamic and engaging web applications, enhancing overall user experience.",
      imgurl:
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1706541827/samples/javascript.png",
    },
    {
      title: "Node.Js",
      desc: "Proficient in server-side JavaScript programming using Node.js, allowing for scalable and efficient web application development.",
      imgurl:
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1706549165/samples/node-js.png",
    },
    {
      title: "Express",
      desc: "Skilled in utilizing the Express.js framework to build robust and flexible web applications, simplifying the creation of RESTful APIs and enhancing the development process.",
      imgurl:
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1706549514/samples/express.png",
    },
    {
      title: "MongoDB",
      desc: "Experienced in using Mongoose, an elegant MongoDB object modeling tool for Node.js, to streamline interaction with MongoDB databases in applications.",
      imgurl:
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1706549953/samples/mongodb.png",
    },
    {
      title: "Java",
      desc: "Proficient in Java programming Solid understanding of fundamental data structures and algorithms in java.",
      imgurl:
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1706541227/samples/java.jpg",
    },
    {
      title: "DSA",
      desc: "Skilled in Data Structures and Algorithms, with strong foundations in arrays, linked lists, trees, and sorting for efficient solutions.",
      imgurl: dsa,
    },
    {
      title: "HTML & CSS",
      desc: "Expertise in HTML and CSS for crafting visually appealing and well-structured web pages, ensuring a seamless user interface.",
      imgurl:
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1706542780/samples/htmlcss.png",
    },
    {
      title: "MySQL",
      desc: "Strong understanding of database design and management, with expertise in SQL and relational databases.",
      imgurl:
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1706543203/samples/sql.jpg",
    },
    {
      title: "Tailwind & Bootstrap",
      desc: "Familiar with both Bootstrap and Tailwind CSS frameworks to create responsive and visually appealing user interfaces",
      imgurl:
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1706544853/samples/tailwindbootstrap.png",
    },
    // {
    //   title: "Jquery, Redux",
    //   desc: "Basic understanding in jQuery, a feature-rich JavaScript library. Applied foundational concepts of Redux in Projects, a predictable state container for JavaScript applications.",
    //   imgurl:
    //     "https://res.cloudinary.com/dyzdwawer/image/upload/v1706548124/samples/redux.png",
    // },
    
  ];

  return (
    <>
      <About />
      <div className="skill-section container my-5  p-5">
        <h1
          className="my-5 pb-5 text-center skill-heading"
          style={{ fontFamily: "Georgia" }}
        >
          <span className="border-4 border-bottom">The Skills I Have</span>
        </h1>
        <div className="row row-cols-1 row-cols-md-3 g-5 ">
          {skills.map((item) => (
            <Skill key={item.title} skill={item} />
          ))}
        </div>
      </div>

      <div className="container px-5">
        <h1 style={{ fontFamily: "Georgia" }} className="text-center">
          <span className="border-4 border-bottom">Strength</span>
        </h1>
        <div className=" d-flex gap-3 my-5 flex-wrap pb-4 justify-content-center text-center">
          <button type="button" className="btn btn-primary py-2 px-3">
            Time Management
          </button>

          <button type="button" className="btn btn-success py-2 px-3">
            Self Motivated
          </button>
          <button type="button" className="btn btn-danger py-2 px-3">
            Problem Solving
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;

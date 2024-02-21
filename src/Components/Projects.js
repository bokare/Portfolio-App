// import "./Projects.css";
import Project from "./Project";
import Button from "./Button";
function Projects() {
  const projects = [
    {
      title: "Random Quotes",
      link: "https://random-quote-system.vercel.app",
      imgurl:
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708541848/samples/projects%20thumbnail/random%20quote.png",
      codelink: "https://github.com/bokare/Random-Quote-System",
      technologys: [
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708528087/samples/technology%20photos/html.png",
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708528177/samples/technology%20photos/css.png",
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708528236/samples/technology%20photos/javascript.png",
        ,
      ],
    },
    {
      title: "Todo List",
      link: "https://todo-list-bokare.vercel.app",
      imgurl:
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708537853/samples/projects%20thumbnail/todo.png",
      codelink: "https://github.com/bokare/Todo-List",
      technologys: [
        "https://harshallportfolio.vercel.app/assets/react-h3aPdYU7.svg",
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708528087/samples/technology%20photos/html.png",
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708528236/samples/technology%20photos/javascript.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRld8EcXNHiLxenTYvUX0ReOMbbjIp5uqUOf6I79MSqxA&s",
      ],
    },

    {
      title: "Nutrition Tracker",
      link: "https://nutrition-tracker-gules.vercel.app",
      imgurl:
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708533940/samples/projects%20thumbnail/nutrition%20tracker.png",
      codelink: "https://github.com/bokare/Nutrition-App",
      technologys: [
        "https://harshallportfolio.vercel.app/assets/react-h3aPdYU7.svg",
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708534588/samples/technology%20photos/bootstrap.jpg",
        "https://harshallportfolio.vercel.app/assets/js-bumRY2k2.png",
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708533120/samples/technology%20photos/express.png",
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708533614/samples/technology%20photos/mongodb.png",
      ],
    },
    {
      title: "Timer Clock",
      link: "https://timer-clock-olive.vercel.app",
      imgurl:
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708536076/samples/projects%20thumbnail/blog%20apps.png",
      codelink: "https://github.com/bokare/Timer-Clock",
      technologys: [
        "https://harshallportfolio.vercel.app/assets/react-h3aPdYU7.svg",
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708528236/samples/technology%20photos/javascript.png",
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708528177/samples/technology%20photos/css.png",
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708534588/samples/technology%20photos/bootstrap.jpg",
      ],
    },
    {
      title: "Text Utils",
      link: "https://text-utils-roan.vercel.app/addform",
      imgurl:
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708536891/samples/projects%20thumbnail/text%20utils.png",
      codelink: "https://github.com/bokare/Text-Utils",
      technologys: [
        "https://harshallportfolio.vercel.app/assets/react-h3aPdYU7.svg",
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708528087/samples/technology%20photos/html.png",
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708528177/samples/technology%20photos/css.png",
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708528236/samples/technology%20photos/javascript.png",
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708534588/samples/technology%20photos/bootstrap.jpg",
      ],
    },

    {
      title: "Blog App",
      link: "https://vaibhav-bokare-blog-l6p7vetv3-bokare.vercel.app/blogs",
      imgurl:
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708538488/samples/projects%20thumbnail/backeng%20blogapp2.png",
      codelink: "https://github.com/bokare/Blog-App",
      technologys: [
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708528177/samples/technology%20photos/css.png",
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708528236/samples/technology%20photos/javascript.png",
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708530050/samples/technology%20photos/ejs.png",

        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708533120/samples/technology%20photos/express.png",
        "https://res.cloudinary.com/dyzdwawer/image/upload/v1708533614/samples/technology%20photos/mongodb.png",
      ],
    },
  ];

  return (
    <>
      <section
        className="container my-4 py-5 px-3"
        style={{ backgroundColor: "" }}
      >
        <h1
          className="text-center my-3 "
          style={{
            fontFamily: "Raleway",
            fontWeight: 700,
            lineHeight: "2.5rem",
          }}
        >
          <span className="border-4 border-bottom mb-2 ">
            These are some of my projects
          </span>
        </h1>

        <div className="row row-cols-1  row-cols-lg-3 row-cols-md-2  g-5 my-5 pb-3">
          {projects.map((item) => (
            <div key={item.title}>
              <Project item={item} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            text="Show All  "
            to="https://github.com/bokare"
            target="_blank"
          />
        </div>
      </section>
    </>
  );
}

export default Projects;

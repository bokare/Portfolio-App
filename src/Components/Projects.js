// import "./Projects.css";
import Project from "./Project";
import Button from "./Button";
function Projects() {
  const projects = [
    {
      title: "Random Quotes Machine",
      link: "https://codepen.io/freeCodeCamp/full/zNqgVx",
      imgurl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/images/random-quote-machine.png",
        codelink:"https://github.com/bokare",
      technologys: [
        "https://harshallportfolio.vercel.app/assets/html5-isgxMnjb.png",
        "https://harshallportfolio.vercel.app/assets/css3-Gy62SVAX.png",
        "https://harshallportfolio.vercel.app/assets/js-bumRY2k2.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRld8EcXNHiLxenTYvUX0ReOMbbjIp5uqUOf6I79MSqxA&s",
        "https://harshallportfolio.vercel.app/assets/react-h3aPdYU7.svg",
      ],
    },
    {
      title: "Tributes Pagsdhe",
      link: "https://codepen.io/freeCodeCamp/full/zNqgVx",
      imgurl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute.jpg",
        technologys: [
            "https://harshallportfolio.vercel.app/assets/html5-isgxMnjb.png",
            "https://harshallportfolio.vercel.app/assets/css3-Gy62SVAX.png",
            "https://harshallportfolio.vercel.app/assets/js-bumRY2k2.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRld8EcXNHiLxenTYvUX0ReOMbbjIp5uqUOf6I79MSqxA&s",
            "https://harshallportfolio.vercel.app/assets/react-h3aPdYU7.svg",
          ],
    },
    {
      title: "Tributeh Paghkje",
      link: "https://codepen.io/freeCodeCamp/full/zNqgVx",
      imgurl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute.jpg",
        technologys: [
            "https://harshallportfolio.vercel.app/assets/html5-isgxMnjb.png",
            "https://harshallportfolio.vercel.app/assets/css3-Gy62SVAX.png",
            "https://harshallportfolio.vercel.app/assets/js-bumRY2k2.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRld8EcXNHiLxenTYvUX0ReOMbbjIp5uqUOf6I79MSqxA&s",
            "https://harshallportfolio.vercel.app/assets/react-h3aPdYU7.svg",
          ],
    },
    {
      title: "Tribdute Pajge",
      link: "https://codepen.io/freeCodeCamp/full/zNqgVx",
      imgurl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute.jpg",
        technologys: [
            "https://harshallportfolio.vercel.app/assets/html5-isgxMnjb.png",
            "https://harshallportfolio.vercel.app/assets/css3-Gy62SVAX.png",
            "https://harshallportfolio.vercel.app/assets/js-bumRY2k2.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRld8EcXNHiLxenTYvUX0ReOMbbjIp5uqUOf6I79MSqxA&s",
            "https://harshallportfolio.vercel.app/assets/react-h3aPdYU7.svg",
          ],
    },
    {
      title: "Tribfute Pagjhe",
      link: "https://codepen.io/freeCodeCamp/full/zNqgVx",
      imgurl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute.jpg",
        technologys: [
            "https://harshallportfolio.vercel.app/assets/html5-isgxMnjb.png",
            "https://harshallportfolio.vercel.app/assets/css3-Gy62SVAX.png",
            "https://harshallportfolio.vercel.app/assets/js-bumRY2k2.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRld8EcXNHiLxenTYvUX0ReOMbbjIp5uqUOf6I79MSqxA&s",
            "https://harshallportfolio.vercel.app/assets/react-h3aPdYU7.svg",
          ],
    },
    {
      title: "Tribddfhute Page",
      link: "https://codepen.io/freeCodeCamp/full/zNqgVx",
      imgurl:
        "https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute.jpg",
        technologys: [
            "https://harshallportfolio.vercel.app/assets/html5-isgxMnjb.png",
            "https://harshallportfolio.vercel.app/assets/css3-Gy62SVAX.png",
            "https://harshallportfolio.vercel.app/assets/js-bumRY2k2.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRld8EcXNHiLxenTYvUX0ReOMbbjIp5uqUOf6I79MSqxA&s",
            "https://harshallportfolio.vercel.app/assets/react-h3aPdYU7.svg",
          ],
    },
  ];

  return (
    <>
      <section class="container my-4  p-5" style={{backgroundColor:""}}>
        <h1
          className="text-center my-3 "
          style={{ fontFamily: "Raleway", fontWeight: 700 }}
        >
          <span class="border-4 border-bottom pb-1">
            These are some of my projects
          </span>
        </h1>

        <div class="row row-cols-1 row-cols-md-3 g-5 my-5 pb-3">
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

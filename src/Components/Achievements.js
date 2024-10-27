import "./General.css";

function Achievements() {
  return (
    <>
      <div className="">
        <div
          className="container p-4 text-center py-5 certi-head"
          style={{ maxWidth: "800px", fontSize: "1.3rem" }}
        >
          <h1 className="py-3" style={{ fontFamily: "Georgia" }}>
            <span className="border-4 border-bottom">
              Courses and certificates
            </span>
          </h1>
          <div className="my-5 certi" style={{ color: "#36296A" }}>
            <div className="p-3 mb-2 bg-warning-subtle text-emphasis-warning">
              <a
                href="https://www.hackerrank.com/certificates/baec59be9122"
                target="_blank"
                rel="noreferrer"
              >
                Java Basic certificate - by HakerRank
              </a>
            </div>
            <div className="p-3 mb-2 bg-info-subtle text-emphasis-info">
              <a
                href="https://www.hackerrank.com/certificates/4b5f18f0701d"
                target="_blank"
                rel="noreferrer"
              >
                JavaScript Basic certificate - by HakerRank
              </a>
            </div>
            <div className="p-3 mb-2 bg-warning-subtle text-emphasis-warning">
              <a
                href="https://www.hackerrank.com/certificates/27808f3cd722"
                target="_blank"
                rel="noreferrer"
              >
                JavaScript Intetmediate certificate - by HakerRank
              </a>
            </div>
            <div className="p-3 mb-2 bg-info-subtle text-emphasis-info">
              <a
                href="https://www.hackerrank.com/profile/bokarevk2001"
                target="_blank"
                rel="noreferrer"
              >
                HakerRank 5 Stars in Java
              </a>
            </div>
            <div className="p-3 mb-2 bg-warning-subtle text-emphasis-warning">
              <a
                href="https://coursera.org/share/01e159dc7ddc85cde0b35634c06b79a9"
                target="_blank"
                rel="noreferrer"
              >
                Git and GitHub Essentials - by coursera
              </a>
            </div>
            <div className="p-3 mb-2 bg-info-subtle text-emphasis-info">
              <a
                href="https://www.freecodecamp.org/certification/fcc3a97ad88-6c35-475a-a459-24d575f2cdf0/javascript-algorithms-and-data-structures"
                target="_blank"
                rel="noreferrer"
              >
                JavaScript Algorithms and Data Structures - by freeCodeCamp
              </a>
            </div>
            <div className="p-3 mb-2 bg-warning-subtle text-emphasis-warning">
              <a
                href="https://www.freecodecamp.org/certification/fcc3a97ad88-6c35-475a-a459-24d575f2cdf0/front-end-development-libraries"
                target="_blank"
                rel="noreferrer"
              >
                Front End Development Libraries - by freeCodeCamp
              </a>
            </div>
            <div className="p-3 mb-2 bg-info-subtle text-emphasis-info">
              <a
                href="https://res.cloudinary.com/dyzdwawer/image/upload/v1706639184/samples/internship.jpg"
                target="_blank"
                rel="noreferrer"
              >
                Internship Certificate - by Lets Grow More
              </a>
            </div>
            <div className="p-3 mb-2 bg-warning-subtle text-emphasis-warning">
              <a
                href="https://res.cloudinary.com/dyzdwawer/image/upload/v1706638594/samples/html%20by%20great%20learning.jpg"
                target="_blank"
                rel="noreferrer"
              >
                Front End Development HTML - by Great Learning Academy
              </a>
            </div>
            <div className="p-3 mb-2 bg-info-subtle text-emphasis-info">
              <a
                href="https://res.cloudinary.com/dyzdwawer/image/upload/v1706638673/samples/css%20certi.jpg"
                target="_blank"
                rel="noreferrer"
              >
                CSS For Intermediate - by Great Learning Academy
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achievements;

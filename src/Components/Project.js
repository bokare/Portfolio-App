import "./General.css";
function Project({ item }) {
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <a
            href={item.link}
            target="_blank"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={item.imgurl} className="card-img-top" alt={item.title} />
            <div className="card-body text-center">
              <h5 className="card-title">Technology Used :</h5>
              <div className="">
                {item.technologys.map((im, index) => (
                  <img
                    key={index}
                    src={`${im}`}
                    alt="tech"
                    style={{ width: "1.75rem", margin: "0 0.5em" }}
                  />
                ))}
              </div>
            </div>
          </a>
          <a
            href={item.codelink}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <div className="card-footer">
              <h4 className="text-body-secondary text-center">
                <span className="code"> &lt; </span>
                {item.title}
                <span className="code"> &#47;&gt; </span>
              </h4>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Project;

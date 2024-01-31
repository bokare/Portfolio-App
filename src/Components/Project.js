import "./General.css";
function Project({ item }) {
  return (
    <>
      <div class="col">
        <div class="card h-100">
          <a
            href={item.link}
            target="_blank"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={item.imgurl} class="card-img-top" alt={item.title} />
            <div class="card-body text-center">
              <h5 class="card-title">Technology Used :</h5>
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
            <div class="card-footer">
              <h4 class="text-body-secondary text-center">
                <span class="code"> &lt; </span>
                {item.title}
                <span class="code"> &#47;&gt; </span>
              </h4>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Project;

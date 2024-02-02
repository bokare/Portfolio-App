import "./General.css";
function Project({ item }) {
  return (
    <>
      <div className="col">
        <div className="card project-card">
          <a
            href={item.link}
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
            rel="noreferrer"
          >
            <img src={item.imgurl} className="card-img-top" alt={item.title} />
            <div className="card-body text-center" style={{backgroundColor:"#233248" ,}}>
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
            style={{ textDecoration: "none", color:"red" }}
            rel="noreferrer"
          >
            <div className="card-footer" style={{backgroundColor:"#1F2C3F" ,}}>
              <h4 className="text-body-secondary text-center" >
                <span className="code"> &lt; </span>
                <span style={{color:"white"}}>{item.title}</span>
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

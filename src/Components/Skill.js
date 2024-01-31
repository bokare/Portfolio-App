
import './Button.css'
function Skill({ skill }) {
  return (
    <div className="col-lg-4 col-md-6 col-12 text-center">
      <div
        className="skill card d-flex flex-direction-column p-4 justify-content-around"
        style={{ minHeight: "300px" ,maxHeight:"300px" }}
      >
        <img
          src={skill.imgurl}
          className="card-img-top"
          alt={skill.title}
          style={{
            maxWidth: "120px",
            maxHeight: "120px",
            margin: "0 auto",
            borderRadius: "50%",
          }}
        />

        <h3 className="card-title my-2">{skill.title}</h3>
        <p className="card-text ">{skill.desc}</p>
      </div>
    </div>
  );
}

export default Skill;

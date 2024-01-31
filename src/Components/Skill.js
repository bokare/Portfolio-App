
import './Button.css'
function Skill({ skill }) {
  return (
    <div class="col-lg-4 col-md-6 col-12 text-center">
      <div
        class="skill card d-flex flex-direction-column p-4 justify-content-around"
        style={{ minHeight: "300px" ,maxHeight:"300px" }}
      >
        <img
          src={skill.imgurl}
          class="card-img-top"
          alt={skill.title}
          style={{
            maxWidth: "120px",
            maxHeight: "120px",
            margin: "0 auto",
            borderRadius: "50%",
          }}
        />

        <h3 class="card-title my-2">{skill.title}</h3>
        <p class="card-text ">{skill.desc}</p>
      </div>
    </div>
  );
}

export default Skill;

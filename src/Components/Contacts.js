import Button from "./Button";
import "./General.css";
function Contacts() {
  return (
    <>
      <div className="">
        <p className="display-1 container text-center my-5">Get In Touch</p>
        <p
          className="container text-justify my-5 px-5"
          style={{ fontSize: "1.5rem", maxWidth: "1200px" }}
        >
          I am available on almost every social media. You can message me, I
          will reply within 24 hours. I can help you with Web Development.
        </p>
        <div className="contact d-flex container my-5 px-5 gap-4 justify-content-around flex-wrap">
          <div>
            <div>
              <a href="https://github.com/bokare" target="_blank"> 
              <img
                src="https://res.cloudinary.com/dyzdwawer/image/upload/v1706696673/samples/github.png"
                class="h-7 mr-3 pb-3"
                alt="github"
               
              />
              <p
                className="d-inline-block px-2 align-middle"
                style={{ fontSize: "1.50rem" }}
              >
                Github
              </p></a>
            </div>
            <div>
              <a href="https://www.linkedin.com/feed/?trk=404_page" target="_blank">
              <img
                src="https://res.cloudinary.com/dyzdwawer/image/upload/v1706696931/samples/linkedin.png"
                class="h-7 mr-3 pb-3"
                alt="LimkedIn"
                
              />
              <p
                className="d-inline-block px-2 align-middle"
                style={{ fontSize: "1.50rem",fontWeight:"500",color:"#37475A" }}
              >
                LinkedIn
              </p></a>
            </div>
            <div>
              <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FVaibhav_b_patil" target="_blank"> 
              <img
                src="https://res.cloudinary.com/dyzdwawer/image/upload/v1706697111/samples/twiter.png"
                class="h-7 mr-3 pb-3"
                alt="Twitter"
                style={{}}
              />{" "}
              <p
                className="d-inline-block px-2 align-middle"
                style={{ fontSize: "1.50rem" }}
              >
                Twitter
              </p></a>
            </div>
            <div>
            <a href="mailto:bokarevk2001@gmail.com">
              <img
                src="https://res.cloudinary.com/dyzdwawer/image/upload/v1706697459/samples/logo%20gmail.png"
                class="h-7 mr-3 pb-3"
                alt="gmail"
                style={{}}
              />{" "}
              <p
                className="d-inline-block px-2 align-middle"
                style={{ fontSize: "1.50rem" }}
              >
                Gmail
              </p></a>
            </div>
          </div>
          <div>
            <div className="h3">
              <i class="fa-solid fa-house px-2"></i> pune
            </div>
            <h3 className="pb-3">
              <a href="mailto:bokarevk2001@gmail.com">
                <i class="fa-regular fa-envelope px-2"></i>
                <p className="d-inline-block px-2"> bokarevk2001@gmail.com</p>
              </a>
            </h3>
            <Button text="Resume" />
          </div>
        </div>
      </div>
      <div className="pt-5" style={{ backgroundColor: "#f2eded" } }>
        <div
          className="container my-5 d-flex gap-5 flex-wrap justify-content-around px-5"
          style={{ maxWidth: "1200px" }}
        >
          <p className="align-self-center" style={{ fontSize: "2rem" }}>
            Let’s Work Together!
          </p>
          <div>
            <form method="" action="">
              <label for="first-name">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  placeholder="Enter Name"
                  required
                />
              </label>
              <label for="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  required
                />
              </label>
              <textarea
                id="bio"
                name="bio"
                rows="3"
                cols="40"
                placeholder="YOUR MESSAGE"
                resize="verticle"
              ></textarea>
              <button class="send" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;

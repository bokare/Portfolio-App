import "./General.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

function Contacts() {
  const form = useRef();
  const [alert, setAlert] = useState(null);

  const resumeFileName = "resume.pdf";
  const resumeUrl = process.env.PUBLIC_URL + "/" + resumeFileName;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICEID,
        process.env.REACT_APP_TEMPLATEID,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLICKEY,
        }
      )
      .then(
        () => {
          setAlert("success");
          setTimeout(() => {
            setAlert(null);
          }, 2000);
        },
        (error) => {
          setAlert("fail");
          setTimeout(() => {
            setAlert(null);
          }, 2000);
        }
      );

    form.current.reset();
  };

  return (
    <>
      <div className="pb-5">
        <p
          className="display-1 container text-center my-5"
          style={{ fontFamily: "Georgia" }}
        >
          Get In Touch
        </p>
        <p
          className="container text-justify my-5 px-5 message"
          style={{ fontSize: "1.5rem", maxWidth: "1200px" }}
        >
          I am available on almost every social media. You can message me, I
          will reply within 24 hours. I can help you with Web Development.
        </p>
        <div className="contact d-flex container my-5 px-5 gap-4 justify-content-around flex-wrap">
          <div>
            <div>
              <a
                href="https://github.com/bokare"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dyzdwawer/image/upload/v1706696673/samples/github.png"
                  className="h-7 mr-3 pb-3"
                  alt="github"
                />
                <p
                  className="d-inline-block px-2 align-middle"
                  style={{ fontSize: "1.50rem" }}
                >
                  Github
                </p>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/feed/?trk=404_page"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dyzdwawer/image/upload/v1706696931/samples/linkedin.png"
                  className="h-7 mr-3 pb-3"
                  alt="LimkedIn"
                />
                <p
                  className="d-inline-block px-2 align-middle"
                  style={{
                    fontSize: "1.50rem",
                  }}
                >
                  LinkedIn
                </p>
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/i/flow/login?redirect_after_login=%2FVaibhav_b_patil"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dyzdwawer/image/upload/v1706697111/samples/twiter.png"
                  className="h-7 mr-3 pb-3"
                  alt="Twitter"
                  style={{}}
                />{" "}
                <p
                  className="d-inline-block px-2 align-middle"
                  style={{ fontSize: "1.50rem" }}
                >
                  X (Twitter)
                </p>
              </a>
            </div>
            <div>
              <a href="mailto:bokarevk2001@gmail.com">
                <img
                  src="https://res.cloudinary.com/dyzdwawer/image/upload/v1706697459/samples/logo%20gmail.png"
                  className="h-7 mr-3 pb-3"
                  alt="gmail"
                  style={{}}
                />{" "}
                <p
                  className="d-inline-block px-2 align-middle"
                  style={{ fontSize: "1.50rem" }}
                >
                  Gmail
                </p>
              </a>
            </div>
          </div>
          <div>
            <div className="h3">
              <i className="fa-solid fa-house px-2"></i> pune
            </div>
            <h3 className="pb-3">
              <a href="mailto:bokarevk2001@gmail.com">
                <i className="fa-regular fa-envelope px-2"></i>
                <p className="d-inline-block px-2"> bokarevk2001@gmail.com</p>
              </a>
            </h3>
            <Link to={resumeUrl} id="mylink" target="_blank">
              <button
                id="mybtn"
                type="button"
                className="btn px-5 py-2"
                style={{
                  backgroundColor: "#EC5B53",
                  color: "white",
                  fontSize: "1.2rem",
                  transition: "background-color 0..5s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#581845")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#EC5B53")
                }
              >
                Resume
                <i className="fas fa-chevron-right px-2"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <hr style={{ width: "80%", margin: "0 auto" }}></hr>
      <div className="pt-5">
        <div
          className="container my-5 d-flex gap-5 flex-wrap justify-content-around "
          style={{ maxWidth: "1200px" }}
        >
          <p
            className="align-self-center"
            style={{ fontSize: "2rem", fontFamily: "Georgia" }}
          >
            Let’s Work Together!
          </p>
          <div >
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="first-name">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  placeholder="Enter Name"
                  required
                />
              </label>
              <label htmlFor="email">
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
                placeholder="Your Message"
                resize="verticle"
              ></textarea>
              <button
                className="send"
                type="submit"
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#581845")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#EC5B53")
                }
              >
                Send
              </button>
            </form>
            {alert && (
              <div
                className={`alert alert-${
                  alert === "success" ? "success" : "danger"
                } alert-dismissible fade show`}
                role="alert"
              >
                {alert === "success" ? (
                  <strong>Send message to owner of this App.</strong>
                ) : (
                  <strong>Failed to Send message.</strong>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;

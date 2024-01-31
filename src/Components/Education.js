function Education() {
  return (
    <>
      <div
        className="container flex-column justify-content-evenly my-5 pb-5 px-4"
        style={{ minHeight: "80vh", maxWidth: "900px" }}
      >
        <h1 className="mb-5 text-center">Education</h1>
        <div
          class="accordion bg-danger-subtle text-emphasis-danger "
          id="accordionPanelsStayOpenExample"
        >
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button p-3 d-block"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <div className="d-flex flex-wrap justify-content-between">
                  <h3 style={{ width: "80%" }} className="pr-5">
                    Bachelor of Engineering in Electronics and
                    Telecommunications
                  </h3>
                  <span
                    className="align-self-center"
                    style={{ minWidth: "15%" }}
                  >
                    2019-2023
                  </span>
                </div>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
            >
              <div class="accordion-body p-4">
                <a
                  href="https://mescoe.mespune.org/"
                  target="_blank"
                  style={{ textDecoration: "none", color: "#7B48A6" }}
                >
                  <h5>
                    Modern Education Society's Wadia College of Engineering Pune.
                  </h5>
                </a>
                <p>
                  <h6>📍 cgpa : 8.1</h6>
                </p>
                <p>
                  📍 I have studied basic software engineering subjects like
                  java, javaScript Data Structures, Algorithms, DBMS, OOPS, etc.
                </p>
                <p>
                  📍 Apart from this, I have done courses on React, Front End
                  Development, Backend Development from various platforms .
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed p-3 d-block"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                <div className="d-flex flex-wrap justify-content-between">
                  <h3 className="pr-5">HSC 12th</h3>
                  <span style={{ minWidth: "15%" }} className="align-self-center">2019</span>
                </div>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body py-5">
                <a
                  href="https://ymnnanded.in/"
                  target="_blank"
                  style={{ textDecoration: "none", color: "#7B48A6" }}
                >
                  <h5>Yeshwant Mahavidyalaya, Nanded.</h5>
                </a>
                <p className="my-2 pt-2">
                  <h6>📍percentage : 76.46</h6>
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed p-3 d-block"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                <div className="d-flex flex-wrap justify-content-between">
                  <h3 className="pr-5">SSC 10th</h3>
                  <span style={{ minWidth: "15%" }} className="align-self-center">2017</span>
                </div>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body py-5">
                <h5 style={{color: "#7B48A6" }}>Shahid Bhagatsingh High School Bajajngar, Sambhajinagar.</h5>
                <p className="my-2 pt-2">
                  <h6>📍percentage : 90.00</h6>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;

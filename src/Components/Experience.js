import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const experiences = [
  {
    jobTitle: "MERN Stack Developer",
    company: "BharathaTechno IT Pvt. Ltd.",
    dates: "April 2024 - Present",
    description:
      "Skilled in MERN stack development with a strong focus on Next.js, leveraging MongoDB, Express.js, React, and Node.js to build robust web applications. Experienced in delivering real-life projects that prioritize efficient data handling and user experience.",
  },
  {
    jobTitle: "Full Stack Development",
    company: "SevenMentor & Training Pvt Ltd.",
    dates: "Aug 2023 - March 2024",
    description:
      "Completed a Full Stack Development course covering HTML, CSS, JavaScript, and React.js for frontend, along with Core Java and backend fundamentals. Gained expertise in building responsive, user-centric applications, with projects published on GitHub.",
  },
  {
    jobTitle: "Web Development Internship",
    company: "Let's Grow More",
    dates: "March 2022 - April 2022",
    description:
      "Completed a one-month internship in web development, gaining proficiency in HTML, CSS, and JavaScript while building foundational webpages.",
  },
  // Add more experiences here
];

const Experience = () => {
  return (
    <Container className="my-5">
      <h1 className="my-5 text-center py-3" style={{ fontFamily: "Georgia" }}>
        <span className="border-4 border-bottom">Experience</span>
      </h1>
      <Row>
        {experiences.map((exp, index) => (
          <Col md={6} key={index} className="mb-4 d-flex">
            <Card className="h-100 flex-grow-1">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{exp.jobTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {exp.company}
                </Card.Subtitle>
                <Card.Text>
                  <small className="text-muted">{exp.dates}</small>
                </Card.Text>
                <Card.Text>{exp.description}</Card.Text>
                <div className="mt-auto">
                  {/* You can add any footer content here to stick at the bottom of the card if needed */}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Experience;

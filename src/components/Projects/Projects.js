import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import genada_infor from "../../Assets/Projects/genada_infor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={genada_infor}
              isBlog={false}
              title="Generate Infor"
              description="A tool used to random data including name, email, phone..."
              ghLink="https://github.com/HuuQuyet10/clone-mail-infor"
              demoLink="https://clone-data-by-huuquyet.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

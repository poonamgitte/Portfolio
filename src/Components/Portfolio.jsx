
import React from "react";

import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Wanderlust full stack web application",
    description:"Developed a full-stack web application inspired by Airbnb. Focusing on key features like user authentication, authorization property listings, review, and rating functionality using technologies HTML, CSS, JS, Bootstrap framework, Backend: Node.js, Express.js, MongoDB(NoSQL) database, used Cloudinary for image upload, Version Control: Git, GitHub, mongodb atlas database and render for deployment",
  
    url: "https://wanderlust-qv06.onrender.com/",
  },
  {
    title: "Resume Generator website",
    description:
      "Developed a responsive resume generator website using HTML, CSS, JavaScript and bootstrap framework. The project provides users with clean and professional layout suitable for various job applications and an intuitive interface for easy resume creation.",
    // url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "Sports person image classification system",
    description:
      "Developed a supervised learning model to classify images of sports persons using Python, deployed on a Flask server, with a front-end built using HTML, CSS, and JavaScript.",
    // url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "Spotify Clone",
    description:
    " A frontend spotify clone developed by recreatint layout, design elements similar to original Spotify app using HTML, CSS, JavaScript"
    // url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  }
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
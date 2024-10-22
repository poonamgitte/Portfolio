
import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I'm a B.Tech student at Dr. Babasaheb Ambedkar Technological University. I'm skilled in HTML, CSS, JavaScript. I love creating responsive and dynamic websites."


const skillsList = [
  "Web design",
  "Frontend Development",
  "Backend development",
  "Good Listener",
  "Teamwork",
  "Problem Solving",
];

const Hobbies =[
  "Painting & Drawing",
  "Making Rangoli",
  "Playing Badminton"
]

const detailOrQuote =
  "A self-driven and meticulous B-tech student skilled at C, C++ programming languages, web development ,problem solving, I'm expanding my skills with React and Node.js. I am eager to enhance my skill set and I am open to guidance and training to achieve this."
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p >{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.2rem",
            margin: "1rem 2rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr/>
        <h3>Intrest</h3>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.2rem",
            margin: "1rem 2rem",
            gap: "3rem",
          }}
        >
          {Hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
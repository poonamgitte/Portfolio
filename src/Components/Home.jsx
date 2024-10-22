
import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

import image from "../images/desktop-wallpaper-portfolio.jpg";
import profileImage from "../images/profile-image.jpg";

const imageAltText = "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      
      <div style={{ position: "absolute", top: "12rem", left: "45%" }}>
        <img src={profileImage} style={{ height: "10rem", width: "10rem", borderRadius:"50%"}} alt={imageAltText} />
      </div>

      <div style={{ position: "absolute", top: "23rem", left: "35%", width: "30rem",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h1 style={{color:"black"}}>{name}</h1>
        <h2 style={{color:"black"}}>{title}</h2>
      </div>

      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/robots.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Face_recognition_Attendance 🎉",
    description:
      "A face recognition based attendance system using Python, OpenCV, and face_recognition library. It can be used to mark attendance for multiple students in a classroom. It also stores the attendance in a CSV file.",
    url: "https://github.com/atul120212/Face_recognition_Attendance",
  },
  {
    title: "Fruit_Detection_frontend",
    description:
      "A web application that detects the fruit in the image and tells the name of the fruit. It is made using python and streamlit. It uses the model for the detection of the fruit.",
    url: "https://github.com/atul120212/Fruit_Detection_frontend",
  },
  {
    title: "Calories_Advisor",
    description:
      "A web application that helps you to calculate your daily calories intake and also suggest you the diet plan according to your goal. It is made using python and streamlit",
    url: "https://github.com/atul120212/Calories_Advisor",
  },
  {
    title: "GenBlog",
    description:
      "A blog website where you can write your blogs and also read others blogs. It is made using Django. It also has the feature of authentication and authorization.",
    url: "https://github.com/atul120212/GenBlog",
  },
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

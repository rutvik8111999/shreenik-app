import React from "react";
import Navbar from "./Navbar";
import "./About.css";
import aboutus from "../images/aboutus.png";
import person from "../images/person.png";
import Footer from "./Footer";
import vishal from "../images/vishal-bhatt.png";
import miral from "../images/miralshah.png";

function About() {
  return (
    <div>
      <Navbar></Navbar>

      <section>
        {/* <div className="movie__Text">MARKETING</div> */}
        <div className="distabout">
          <div>
            <h1>
              <span className="text-primary"> ABOUT </span> US
            </h1>
            <p>
              We are driven by the vision to take the quality content to the
              mass scale through diverse channels at disposal Publicity and
              Advertising for full length feature film is one of the our core
              strength. We are based in Ahmedabad, Gujarat and have reach office
              in Mumbai as well. Our extensive distribution capability in
              Regional, National and Overseas enable us to target mass, which
              yields significant economic growth for content creators and
              quality content for viewers.
            </p>
          </div>
          <div>
            <img src={aboutus} alt="hii" />
          </div>
        </div>
      </section>
      <section id="about-info" className="bg-light py-3">
        <div className="about-container">
          <div className="info-left">
            <h1 className="l-heading">
              <span className="text-primary"> About</span> Vishal Bhatt
            </h1>
            <p>
              Mr. Vishal Bhatt is Gujarat’s leading Film exploitation
              professionals. He has wide experience in business development,
              company operation ,strategy planning, acquisition of movies, and
              building up the brand “Shreenik Outreach.”
            </p>
          </div>
          <div className="info-right">
            <img src={vishal} alt="hii" />
          </div>
        </div>
      </section>
      <section id="about-info" className="bg-light py-3">
        <div className="about-container">
          <div className="info-left">
            <img src={miral} alt="hii" />
          </div>
          <div className="info-right">
            <h1 className="l-heading">
              <span className="text-primary"> About</span> Miral Shah
            </h1>
            <p>
              Mr. Miral Shah is Gujarat’s leading Film exploitation
              professionals. He has wide experience in business development,
              company operation ,strategy planning, acquisition of movies, and
              building up the brand “Shreenik Outreach.
            </p>
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-3">
        <div className="about-container">
          {/* <h2 className=".bg-light">What People Say</h2> */}
          <div className="testimonial bg-primary">
            <img src={person} alt="hii" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              neque voluptatibus beatae natus laboriosam, quasi sapiente rerum,
              debitis itaque facilis cumque nihil assumenda quos facere modi
              consequatur repellat? Unde, cum sit. Aliquid natus, nesciunt
              reprehenderit aspernatur optio eveniet culpa molestias?
            </p>
          </div>
          <div className="testimonial bg-primary">
            <img src={person} alt="hii" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              neque voluptatibus beatae natus laboriosam, quasi sapiente rerum,
              debitis itaque facilis cumque nihil assumenda quos facere modi
              consequatur repellat? Unde, cum sit. Aliquid natus, nesciunt
              reprehenderit aspernatur optio eveniet culpa molestias?
            </p>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default About;

import React from "react";
import "./Footer.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
// import MailIcon from "@material-ui/icons/Mail";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-container">
          <div className="column1">
            <div className="location">
              <h2>Address</h2>
              <div className="address">
                <p>
                  <span>
                    <LocationOnIcon />
                  </span>
                  914 J B Tower Near Sal Hospital Drive In Road Ahmedabad
                </p>
              </div>
              <section>
                <iframe
                  title="map"
                  style={{
                    width: "250px",
                    height: "120px",
                    padding: "3px",
                    margin: "7px",
                    // border: "4px solid black",
                  }}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Opp.Sales%20India%20Ahmedabad+(Harekrishna%20Complex)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </section>
              {/* <h2>Canada:</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, debitis.
            </p> */}
            </div>
          </div>
          <div className="column2">
            <h2>Services</h2>
            <ul>
              <li>
                <a href="/services">Film Production</a>
              </li>
              <li>
                <a href="/services">Distribution</a>
              </li>
              <li>
                <a href="/services">Marketing</a>
              </li>
              <li>
                <a href="/services">Licensing</a>
              </li>
            </ul>
          </div>
          <div className="column3">
            <h2>Pages</h2>
            <ul>
              <li>
                <a href="/Home">Home</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
              <li>
                <a href="/Services">Services</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/Contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="column4">
            <div className="contact">
              <h2>Contact Us</h2>
              <div className="phone">
                <h3>
                  {/* <BsFillTelephoneFill
                    size={25}
                    style={{
                      color: "#ccc",

                      marginTop: "1rem",
                    }}
                  /> */}
                </h3>
                <p onClick={() => (window.location = "tel:8511701589")}>
                  <span>
                    <LocalPhoneIcon />
                  </span>
                  +91 90003000
                </p>
              </div>
              {/* <div className="email"> */}
              {/* <h3> */}
              {/* <FaMailBulk size={25} style={{ color: "#ccc" }} /> */}
              {/* </h3> */}
              {/* <p onClick={() => (window.location = "mailto:xyz.com")}> */}
              {/* <span><MailIcon /></span> */}
              {/* shreenikoutreach@gmail.com */}
              {/* </p> */}
              {/* </div> */}
              {/* <h2 style={{ marginTop: "15px" }}>For Business Inquiries</h2> */}
              <div className="email">
                <h3>
                  {/* <FaMailBulk size={25} style={{ color: "#ccc" }} /> */}
                </h3>
                <p onClick={() => (window.location = "mailto:xyz.com")}>
                  {/* <span>
                    <MailIcon />
                  </span>{" "} */}
                  shreenikbuisness@gmail.com
                </p>
              </div>
            </div>
            {/* <div className="social"> */}
            {/* <a href="mailto:sales@softcodingsolutions.com"> */}
            {/* <FcGoogle
                  className="socialIcons"
                  size={35}
                  style={{ marginTop: "1rem" }}
                /> */}
            {/* </a> */}
            {/* <a href="https://in.linkedin.com/company/softcoding-solutions"> */}
            {/* <FaLinkedin
                  className="socialIcons"
                  size={35}
                  style={{ color: "white", marginTop: "1rem" }}
                /> */}
            {/* </a> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

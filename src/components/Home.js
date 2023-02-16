import React from "react";
import "./Home.css";
import Images from "./Images";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Slider from "./Slider/Slider";
import Logo from "./Logo";
import marketingvideo from "../images/imagemarketing.gif";
import distributionimage from "../images/handshake.png";
import filmproductionimage from "../images/filmproduction.png";
import FilmContent from "./content/FilmContent";
import DistributionContent from "./content/DistributionContent";
import MarketingContent from "./content/MarketingContent";
// import TypeWriter from "typewriter-effect";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="Homemain">
        <div className="homeslogan">
          {/* <a className="brand__name" href="https://shreenik.com/">
            Shreenik Outreach
          </a>
          <p className="brand__work">Distribution | Marketing | Licensing</p> */}
        </div>
        {/* <div className="content123">
          <h1>COMPANY</h1>
          <TypeWriter
            className="slogan"
            onInit={(typewriter) => {
              typewriter
                .typeString("<p>You Think We Create.</p>")
                .start()
                .pauseFor(100)
                .deleteAll()
                .typeString("<p>Grow Your Business Digitally With Us</p>");
            }}
          />
        </div> */}

        <Slider></Slider>

        <Images></Images>
        <div className="animatedknowmore">
          <button className="btn-home">
            <a href="/Projects">Know more</a>
          </button>
        </div>
        <section>
          {/* <div className="movie__Text">MARKETING</div> */}
          <div className="disthome">
            <div>
              <h1>
                <span className="text-primary">FILM</span> PRODUCTION
              </h1>
              <FilmContent />
              {/* <button className="buttonknowmore">
                <a href="/Services" className="knowmore">
                  Know more
                </a>
              </button> */}
            </div>
            <div>
              <img src={filmproductionimage} alt="" />
            </div>
          </div>
        </section>
        <section>
          {/* <div className="movie__Text">DISTRIBUTION</div> */}
          <div className="disthome">
            <div>
              <img src={distributionimage} alt="" />
            </div>
            <div>
              <h1>
                <span className="text-primary"> DISTRI</span>BUTION
              </h1>
              <DistributionContent />
              {/* <button className="buttonknowmore">
                <a href="/Services" className="knowmore">
                  Know more
                </a>
              </button> */}
            </div>
          </div>
        </section>
        <section>
          {/* <div className="movie__Text">MARKETING</div> */}
          <div className="disthome">
            <div>
              <h1>
                {" "}
                <span className="text-primary">MARK</span>ETING
              </h1>
              <MarketingContent />
              {/* <button className="buttonknowmore">
                <a href="/Services" className="knowmore">
                  Know more
                </a>
              </button> */}
            </div>
            <div>
              <img src={marketingvideo} alt="" />
            </div>
          </div>
        </section>
        <div className="animatedknowmore">
          <button className="btn-home">
            <a href="/Services">Know more</a>
          </button>
        </div>
        <section>
          {/* <div className="movie__Text">CONTENT LICENSING</div> */}
          <div>
            <Logo></Logo>
          </div>
        </section>

        {/* <section>
          <iframe
            title="map"
            style={{ width: "200px", height: "100px" }}
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Opp.Sales%20India%20Ahmedabad+(Harekrishna%20Complex)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </section> */}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;

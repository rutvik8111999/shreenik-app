import React from "react";
import Navbar from "./Navbar";
import distributionimage from "../images/handshake.png";
import contractimage from "../images/contract.png";
import marketingvideo from "../images/imagemarketing.gif";
import "./Services.css";
import Logo from "./Logo";
import Footer from "./Footer";
import filmproductionimage from "../images/filmproduction.png";

function Services() {
  return (
    <div>
      <Navbar />
      <section>
        {/* <div className="movie__Text">MARKETING</div> */}
        <div className="distservices">
          <div>
            <h1>
              <span className="text-primary">FILM</span> PRODUCTION
            </h1>
            <p>
              Film promotion can have a huge effect on whether or not it is
              successful. We believe in the crucial role of intelligence to
              identify the right promotional strategy for each film. Movie
              promotions not only include getting the attention of the audiences
              but also feeding them the content related to the movie. Our
              expertise covers all areas of marketing and promotion, including
              strategy, advertising, on Ground promotions and social media
              campaigns, TV, Radio, Hording, Influencer marketing and outdoor
              outreach.
            </p>
          </div>
          <div>
            <img src={filmproductionimage} alt="" />
          </div>
        </div>
      </section>
      <section>
        {/* <div className="movie__Text">DISTRIBUTION</div> */}
        <div className="distservices">
          <div>
            <img src={distributionimage} alt="" />
          </div>
          <div>
            <h1>
              <span className="text-primary"> DISTRI</span>BUTION
            </h1>
            <p>
              Our strong reach enables us to maintain transparency and
              flexibility over core regions in which we distribute our films. We
              distribute our content in all the circuits either through our
              distribution network offices and through trusted sub-distributors.
              In recent years Gujarati cinema has witnessed upsurge of quality
              entertaining films from talented producers. We believe quality
              content should reach to audience at the end of lines.
            </p>
          </div>
        </div>
      </section>
      <section>
        {/* <div className="movie__Text">MARKETING</div> */}
        <div className="distservices">
          <div>
            <h1>
              {" "}
              <span className="text-primary">MARK</span>ETING
            </h1>
            <p>
              Film promotion can have a huge effect on whether or not it is
              successful. We believe in the crucial role of intelligence to
              identify the right promotional strategy for each film. Movie
              promotions not only include getting the attention of the audiences
              but also feeding them the content related to the movie. Our
              expertise covers all areas of marketing and promotion, including
              strategy, advertising, on Ground promotions and social media
              campaigns, TV, Radio, Hording, Influencer marketing and outdoor
              outreach.
            </p>
          </div>
          <div>
            <img src={marketingvideo} alt="" />
          </div>
        </div>
      </section>
      <section>
        {/* <div className="movie__Text">CONTENT LICENSING</div> */}
        <div className="logotext">
          <section>
            {/* <div className="movie__Text">DISTRIBUTION</div> */}
            <div className="distservices">
              <div>
                <img src={contractimage} alt="" />
              </div>
              <div>
                <h1>
                  {" "}
                  <span className="text-primary">LICEN</span>SING
                </h1>
                <p>
                  Rights pre-sale / Post sale are an important factor in
                  enhancing revenue predictability for film business and are a
                  vital part of diversification strategy to secure revenue
                  visibility for film producers and financers. We bring
                  production houses and acquisitions companies on common
                  platform. We act as consultancy service for acquiring or
                  selling TV rights, audio rights, VOD other available options
                  include Satellite rights, Cable TV Rights and IPTV Rights etc.
                  of content belonging to a wide array of genres and formats.
                </p>
              </div>
            </div>
          </section>
          <div className="logoservice">
            <Logo></Logo>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Services;

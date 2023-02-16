import React, { useState } from "react";
import "./Content.css";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="readtext">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "Read More" : " Show Less"}
      </span>
    </p>
  );
};

const DistributionContent = () => {
  return (
    <div className="readcontainer">
      <h2>
        <ReadMore>
          Our strong reach enables us to maintain transparency and flexibility
          over core regions in which we distribute our films. We distribute our
          content in all the circuits either through our distribution network
          offices and through trusted sub-distributors. In recent years Gujarati
          cinema has witnessed upsurge of quality entertaining films from
          talented producers. We believe quality content should reach to
          audience at the end of lines.
        </ReadMore>
      </h2>
    </div>
  );
};

export default DistributionContent;

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
      <span onClick={toggleReadMore} className="read-or-hide__">
        {isReadMore ? "Read More" : " Show Less"}
      </span>
    </p>
  );
};

const MarketingContent = () => {
  return (
    <div className="readcontainer">
      <h2>
        <ReadMore>
          Film promotion can have a huge effect on whether or not it is
          successful. We believe in the crucial role of intelligence to identify
          the right promotional strategy for each film. Movie promotions not
          only include getting the attention of the audiences but also feeding
          them the content related to the movie.
        </ReadMore>
      </h2>
    </div>
  );
};

export default MarketingContent;

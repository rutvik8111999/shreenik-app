// import { red } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
// import { SRLWrapper } from "simple-react-lightbox";
import "./Images.css";
// import styled from "styled-components";

// const TagButton = styled.div`
//   color: 'red';
// `;

const images = [
  {
    id: "1",
    imageName: "tariSathe.jpg",
    Name: "Tari Sathe",
    tag: "Upcoming",
    Link: "",
  },
  {
    id: "2",
    imageName: "babubhai.jpg",
    Name: "Babubhai",
    tag: "Upcoming",
    Link: "",
  },
  {
    id: "3",
    imageName: "aron.jpg",
    Name: "Aron",
    tag: "Upcoming",
    Link: "",
  },
  {
    id: "4",
    imageName: "ek-hota-pani-marathi.jpg",
    Name: "ek-hota-pani-marathi",
    tag: "Upcoming",
    Link: "",
  },
  //

  {
    id: "7",
    imageName: "tariSathe.jpg",
    Name: "Tari Sathe",
    tag: "Released",
    Link: "",
  },
  {
    id: "8",
    imageName: "babubhai.jpg",
    Name: "Babubhai",
    tag: "Released",
    Link: "",
  },
  {
    id: "9",
    imageName: "aron.jpg",
    Name: "Aron",
    tag: "Released",
    Link: "",
  },
  {
    id: "10",
    imageName: "ek-hota-pani-marathi.jpg",
    Name: "ek-hota-pani-marathi",
    tag: "Released",
    Link: "",
  },
  {
    id: "11",
    imageName: "firangi.jpg",
    Name: "firangi",
    tag: "Released",
    Link: "",
  },
];

function DestinationMain() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);
  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);
  return (
    <div handleSetTag={setTag}>
      <div className="dest__tags">
        <TagButton
          name="all"
          handleSetTag={setTag}
          tagActive={tag === "all" ? true : false}
        ></TagButton>

        <TagButton
          className="upcomingbtn"
          // style={{ backgroundColor: red }}
          name="Upcoming"
          handleSetTag={setTag}
          tagActive={tag === "Upcoming" ? true : false}
        ></TagButton>
        <TagButton
          name="Released"
          handleSetTag={setTag}
          tagActive={tag === "Released" ? false : true}
        ></TagButton>
      </div>
      <div className="dest__container">
        {filteredImages.map((image) => (
          <div key={image.id} className="image__card">
            <div className="img-container">
              <a href={`${image.Link}`}>
                <img
                  className="dest__image"
                  src={`/images/${image.imageName}`}
                  alt=""
                />
                <div className="overlay">
                  <div className="text">{`${image.Name}`}</div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};
export default DestinationMain;

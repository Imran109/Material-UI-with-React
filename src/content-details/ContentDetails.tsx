import React from "react";
import "./ContentDetails.css";

interface Props {
  openStories: Function;
}

export default function ContentDetails({openStories}: Props) {
  return (
    <div className="content-details">
      <div onClick={(e) => openStories()} className="cover-image-box">
        <img src = {require("./checker_2.png")} alt = "Loading..."/>
      </div>
    </div>
  );
}
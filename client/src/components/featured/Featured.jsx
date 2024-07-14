import "./featured.css";

import React from "react";

function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cdn.pixabay.com/photo/2017/06/27/14/20/couple-2447450_1280.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cdn.pixabay.com/photo/2021/05/14/08/45/surfboard-6252830_1280.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cdn.pixabay.com/photo/2020/04/22/12/06/adventure-5077760_1280.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
    </div>
  );
}

export default Featured;

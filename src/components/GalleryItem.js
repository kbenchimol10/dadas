/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from "react";
import Coaches from "../data/facebook_coaches.json";
import { BACKEND_URL } from "../constants.js";

class GalleryItem extends React.Component {
  render() {
    return (
      <div className="bg-whitsmoke">
        <h1 className="text-center font-size pad-b-60">
          Facebook Coaches Gallery
        </h1>
        <div className="grid grid-col-26 grid-center-items">
          {Coaches.map(data => {
            return (
              <div className="">
                <span className="main w-img">
                  <img
                    src={`${BACKEND_URL}${data.head_shot}`}
                    className="w-img"
                  />
                  <span className="overlay">
                    <h2 className="text">{data.name}</h2>
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default GalleryItem;

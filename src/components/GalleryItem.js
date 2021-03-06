import React from "react";
import Coaches from "../data/facebook_coaches.json";
import { BACKEND_URL } from "../constants.js";
import _ from "lodash";
import logo from "../images/logo.svg";

class GalleryItem extends React.Component {
  render() {
    const unique_coach_list = _.uniqBy(Coaches, "name");
    return (
      <div className="bg-whitsmoke">
        <div className="title">
          <img src={logo} alt="logo" />
          <h1 className="font-size pad-b-60">Facebook Coaches Gallery</h1>
        </div>
        <div className="grid grid-col-26 grid-center-items">
          {unique_coach_list.map(data => {
            return (
              <>
                <span className="main w-img">
                  <img
                    src={`${BACKEND_URL}${data.head_shot}`}
                    alt={`Freeformers facebook coach ${data.name}`}
                    className="w-img"
                  />
                  <span className="overlay">
                    <h2 className="text">{data.name}</h2>
                  </span>
                </span>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default GalleryItem;

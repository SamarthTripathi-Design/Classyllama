import React from "react";
import Shopmen from "../../assets/shopMens.jpg";
import Shopwomen from "../../assets/shopWomens.jpg";
import "./style.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${Shopwomen})`,
          }}
        >
          <a>Shop Womens</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${Shopmen})`,
          }}
        >
          <a>Shop Mens</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;

import React from "react";
import Header from "./../component/Header";
import Footer from "../component/Footer";

const HomepageLayouts = (props) => {
  return (
    <div className="fullHeight">
      <Header />

      {props.children}
      <Footer />
    </div>
  );
};

export default HomepageLayouts;

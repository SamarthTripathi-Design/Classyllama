import React from "react";
import Header from "./../component/Header";
import Footer from "../component/Footer";

const MainLayouts = (props) => {
  return (
    <>
      <Header />

      <div className="main">{props.children}</div>
      <Footer />
    </>
  );
};

export default MainLayouts;

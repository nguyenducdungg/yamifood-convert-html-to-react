import React from "react";
import Routes from "../../routes/routes";
import Footer from "../Header&Footer/Footer";
import Header from "../Header&Footer/Header";

const LayoutCompnent = () => {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
};

export default LayoutCompnent;

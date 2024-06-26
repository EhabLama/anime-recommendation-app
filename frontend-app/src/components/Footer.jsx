import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className={`text-center ${props.class} pt-2 `}>
      <div className="container pt-5 ">
        <section className="mb-4 d-flex justify-content-center gap-5">
          <Link to={"/"} className="nav-link">
            <span className="">H</span>ome
          </Link>
          <Link to={"/contact-us"} className="nav-link">
            <span className="">C</span>ontact us
          </Link>
          <Link to={"/about"} className="nav-link">
            <span className=" ">A</span>bout
          </Link>
        </section>
      </div>

      <div className="text-center p-3">
        <i className="text-white-50  "> Copyright ©2024 Lorem ipsum</i>
      </div>
    </footer>
  );
}

export default Footer;

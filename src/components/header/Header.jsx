import "./header.scss";
import React, { Component } from "react";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Header() {
  const refText = useRef();

  useEffect(() => {
    init(refText.current, { showCursor: true,     backSpeed:  60,  backDelay:  1500, strings: ["Orozco"] });
  }, []);

  return (
    <div className="header">
      <div className="container">
        <nav className="nav">
          <a href="#contact" className="nav_items navs_item-cta">
            Contact
          </a>
          <a href="#about" className="nav_items">
            About
          </a>
          <a href="#skills" className="nav_items">
            Skills
          </a>
          <a href="#portfolio" className="nav_items">
            Porftolio
          </a>
        </nav>

        <div className="header_container">
          <div className="header_text">
            <h1 className="header_title">
              Hello I'm Carlos <span ref={refText}></span>
            </h1>
            <h2 className="header_subtitle">Learn new Things every day.</h2>
            <a href="#about" className="header_cta">
              View More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

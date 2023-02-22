import React from "react";
import logo from "../assets/Logo.png";

export const Header = () => {
  return (
    <main>
      <section className="header">
        <div>
          <img src={logo} alt="logo" className="logoImage" />
        </div>
        <div style={{ marginLeft: "55px" }}>
          <span className="text-muted" style={{ fontSize: "14px" }}>
            Already have an account?
          </span>{" "}
          <a href="#0" style={{ fontSize: "14px" }} className="text-primary">
            Sign in
          </a>
        </div>
      </section>
    </main>
  );
};

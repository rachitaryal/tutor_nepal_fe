import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo/logo8.png";

withMainLayout.propTypes = {
  BodyComponent: PropTypes.node,
  pageHeader: PropTypes.string,
};

function withMainLayout(BodyComponent, pageHeader) {
  class WithMainLayout extends Component {
    render() {
      return (
        <div className="container">
          <header className="header-area">
            <div className="main-menu">
              <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                <a className="navbar-brand" href="/">
                  <img
                    src={logo}
                    alt="Tutor Nepal"
                    className="logo-brand"
                  ></img>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <div className="mr-auto"></div>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/tutor/become-a-tutor/">
                        Become a Tutor
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about/">
                        About Us
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </header>

          <main className="site-main">
            <section className="main-content">
              <div className="main-body">
                <div className="container">
                  {pageHeader && <h1>{pageHeader}</h1>}
                  <BodyComponent />
                </div>
              </div>
            </section>
          </main>
        </div>
      );
    }
  }
  return WithMainLayout;
}

export default withMainLayout;

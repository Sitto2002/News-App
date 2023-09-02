import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark ">
          <div className="container-fluid">
          <img src="data:image/jpeg;base64,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" alt="..." className="img-thumbnail mx-3 rounded-circle " />
            <li className="navbar-brand border-start-0 text-danger border border-3 border border-info rounded-pill bg-light font-weight-bold text-center">
              News 24X7
            </li>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" class="onHover">
                  <Link
                    className="nav-link active text-white" 
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item" class="onHover">
                <Link className="nav-link text-white" to="/Entertainment">
                    Entertainment
                  </Link>
                </li>

                <li className="nav-item" class="onHover">
                <Link className="nav-link text-white" to="/Health">
                    Health
                  </Link>
                </li>

                <li className="nav-item" class="onHover">
                <Link className="nav-link text-white" to="/Science">
                    Science
                  </Link>
                </li>

                <li className="nav-item" class="onHover">
                <Link className="nav-link text-white" to="/Sports">
                    Sports
                  </Link>
                </li>

                <li className="nav-item" class="onHover">
                <Link className="nav-link text-white" to="/Technology">
                    Technology
                  </Link>
                </li>

                <li className="nav-item" class="onHover">
                <Link className="nav-link text-white" to="/Business">
                    Business
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;

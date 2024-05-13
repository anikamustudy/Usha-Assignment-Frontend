import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
// import NavMenuDesktop from "../components/common/NavMenuDesktop";
// import NavMenuMobile from "../components/common/NavMenuMobile";
import About from "../components/others/About";
import MainNavbar from "../components/common/MainNavbar";
import MainMenuMobile from "../components/common/MainMenuMobile";

class AboutPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <MainNavbar />
        </div>

        <div className="Mobile">
          <MainMenuMobile />
        </div>

        <div>
          <About />
        </div>

        <div className="Desktop">
          <FooterDesktop />
        </div>

        <div className="Mobile">
          <FooterMobile />
        </div>
      </Fragment>
    );
  }
}

export default AboutPage;
